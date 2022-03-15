module App
  class Api
    module Routes
      module Streaming
        extend Sinatra::Extension

        before('/streaming/:space/*') do
          content_type("text/event-stream")
          @controller = ::Spaces::Controllers::Streaming.new
        end

        get('/streaming/:space/:stream') {stream_action}
      end
    end
  end
end
