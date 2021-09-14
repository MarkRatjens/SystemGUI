module App
  class Api
    module Helpers

      def parse(json)
        JSON.parse(json, symbolize_names: true)
      end

      def path
        request.fullpath.sub('/api', '')
      end

      # TODO: move settings to spaces
      def settings_filepath
        universe_dir.mkpath
        universe_dir.join('settings.yaml').tap { |file| FileUtils.touch(file) }
      end
      def universe_dir
        Api.spaces.path
      end

      # TODO: Once spaces is handling IndifferentHash params, remove
      #  - params_with(args)
      #  - deep_symbolize_keys
      def action(**args, &block)
        @controller.action(**params_with(args), &block).to_json
      end
      def params_with(args)
        deep_symbolize_keys(params.merge(args))
      end
      def deep_symbolize_keys(object)
        return object unless object.is_a?(Hash)
        {}.tap { |h| object.each { |k, v|
          h[k.to_sym] = deep_symbolize_keys(v)
        } }
      end

      def exception_message_for(e)
        [e.message, '', *e.backtrace].join("\n")
      end

      def stream_action
        stream { |out| streaming(out) }
      end

      def streaming(out)
        @stream_open = true
        begin
          keep_alive(out)
          send_action_output(out)
        rescue => e
          send_exception(out, e)
        end
        @stream_open = false # to close keep_alive
        send_eot(out)
      rescue IOError => e
        logger.warn("Failed to stream event. #{e}")
      end

      def send_action_output(out)
        action { |line| send_output(out, line) }
      end

      def send_eot(out)
        out.puts("event: eot")
        out.puts("data: EOT\n")
      end

      def send_output(out, line)
        out.puts("event: output")
        out.puts("data: #{line}\n")
      end

      def send_exception(out, e)
        out.puts("event: exception")
        exception_message_for(e).split("\n").each do |line|
          out.puts("data: #{line}")
        end
        out.puts("data: \n\n")
      end

      def keep_alive(out)
        Thread.new do
          while @stream_open do
            out.puts(':')
            sleep 10
          end
        end
      end

    end
  end
end
