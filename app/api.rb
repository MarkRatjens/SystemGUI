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
      params.slice(:identifier, :model, :command).to_h.symbolize_keys
    end

    def streaming
      command_stream_for do |emit|

if params[:command] == :import && params[:model]
  ::Publishing::Controllers::Controller.new.import({
    model: params[:model],
  }) do |message|
    emit.call(message)
  end.tap do |result|
    emit.call("\n\033[1;31mCommand error\n\033[0;31m#{result[:errors]}\033[0m") if result[:errors]
  end
elsif params[:command] == :import && params[:identifier]
  ::Publishing::Controllers::Controller.new.import({
    model: Api.spaces.universe.locations.by(params[:identifier]).to_h,
  }.compact) do |message|
    emit.call(message)
  end.tap do |result|
    emit.call("\n\033[1;31mCommand error\n\033[0;31m#{result[:errors]}\033[0m") if result[:errors]
  end
else
        @controller.control(**command_args) do |message|
          emit.call(message)
        end.tap do |result|
          emit.call("\n\033[1;31mCommand error\n\033[0;31m#{result[:errors]}\033[0m") if result[:errors]
        end
end
      end
    end

    def command_stream_for
      started = Time.now.strftime("%H:%M:%S")
      begin
        stream(:keep_open) do |out|
          logger.info "STREAM:#{started} Stream started."
          begin
            yield ->(message) { out.puts "data: #{{log: message}.to_json}\n\n" }
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
