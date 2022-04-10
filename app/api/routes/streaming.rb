module App
  class Api
    module Routes
      module Streaming
        extend Sinatra::Extension

        before('/streaming/*') do
          content_type("text/event-stream")
          @controller = ::Spaces::Controllers::Streaming.new
        end

        get('/streaming/:space/*') {
          params[:stream] = params[:splat][0]
          params.delete(:splat)
          stream_action
        }
      end
    end
  end
end
