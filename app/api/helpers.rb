module App
  class Api
    module Helpers
      require_relative 'helpers/docker'
      require_relative 'helpers/streaming'

      def parse(json)
        JSON.parse(json, symbolize_names: true)
      end

      def path
        request.fullpath.sub('/api', '')
      end

      # TODO: move settings to spaces
      def settings_filepath
        '/tmp/universe_settings.yaml'.tap { |path| FileUtils.touch(path) }
      end

      # TODO: Once spaces is handling IndifferentHash params, remove
      #  - params_with(args)
      #  - deep_symbolize_keys(object)
      def action(args = {}, &block)
        @controller.control(**params_with(args), &block).to_json
      end

      def params_with(args)
        params[:action] = 'summarize' if params[:action] == 'summary'
        deep_symbolize_keys(params.merge(args))
      end

      def deep_symbolize_keys(object)
        return object unless object.is_a?(Hash)
        {}.tap { |h|
          object.each { |k, v| h[k.to_sym] = deep_symbolize_keys(v) }
        }
      end

      def exception_message_for(e)
        [e.message, '', *e.backtrace].join("\n")
      end
    end
  end
end
