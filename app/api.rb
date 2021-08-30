require 'pathname'
require 'mini_magick'
require 'letter_avatar'
require 'fastimage'

module App
  class Api < Sinatra::Base

    require_relative 'api/spaces'

    def self.spaces
      @spaces ||= Spaces.new
    end

    require_relative 'api/settings'
    require_relative 'api/mime'
    require_relative 'api/errors'
    require_relative 'api/models'
    require_relative 'api/session'
    require_relative 'api/setup'
    require_relative 'api/routes'

    helpers Sinatra::Cookies
    helpers Sinatra::Streaming

    register Routes

    after do
      return if content_type
      return 204 if response.body.empty?
      content_type 'application/json'
    end

    before do
      return unless request.content_type == 'application/json'
      params.merge!(JSON.parse(request.body.read))
      puts params
    end

    def path
      request.fullpath.sub('/api', '')
    end

    def action(command)
      @controller.control(command: command, **command_args).to_json
    end

    def command_args
      symbolize_keys(params.to_h).without(:authenticity_token, :resource, :action)
    end

    def symbolize_keys(obj)
      return obj
      .map{|v| symbolize_keys(v)} if obj.is_a?(Array)
      return obj
      .transform_keys { |k| k.to_sym }
      .transform_values { |v| symbolize_keys(v) } if obj.is_a?(Hash)
      return obj
    end


    def stream_for(params)
      started = Time.now.strftime("%H:%M:%S")
      args = command_args
      begin
        stream(:keep_open) do |out|
          logger.info "STREAM:#{started} Stream started."
          begin
            @controller.control(**args) do |line|
              out.puts "data: #{{log: line}.to_json}\n\n"
            end.tap do |result|
              if result[:errors]
                message = "\n\033[1;31mCommand error.\n\033[0;31m#{result[:errors]}\033[0m"
                out.puts "data: #{{log: message}.to_json}\n\n"
              end
            end
          rescue => e
            message = [e.message, *e.backtrace].join("\n")
            logger.error(message)
            out.puts "data: #{{exception: message}.to_json}\n\n"
          ensure
            out.puts "data: #{{eot: true}.to_json}\n\n"
            out.close
          end
        end
        logger.info "STREAM:#{started} Stream complete."
      rescue IOError => e
        logger.info "STREAM:#{started} Stream lost its connection with user agent."
      end
    end
  end
end
