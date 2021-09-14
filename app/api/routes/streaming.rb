module App
  class Api
    module Routes
      module Streaming
        extend Sinatra::Extension

        before '/outputting/?*' do
          content_type("text/event-stream")
          @controller = ::Outputting::Controllers::Controller.new(space: :outputting)
        end

        get('/outputting/@:identifier/:action') { stream_action }
        get('/outputting/:action') { stream_action }

      end
    end
  end
end
