module App
  class Api
    module Routes
      module Streaming
        extend Sinatra::Extension

        before('/streaming/*') do
          content_type("text/event-stream")
          @controller = ::Spaces::Controllers::Streaming.new
        end

        # get('/streaming/publications/@:identifier/import') {
        #   stream_import_for(params[:identifier])
        # }

        get('/streaming/:space/@:identifier/:stream_identifier') {
          stream_action
        }

        # get('/streaming/:space/:stream') {
        #   stream_action
        # }
      end
    end
  end
end
