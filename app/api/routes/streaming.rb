module App
  class Api
    module Routes
      module Streaming
        extend Sinatra::Extension

        before('/streaming/*') do
          content_type("text/event-stream")
          @controller = ::Spaces::Controllers::Streaming.new
        end

        get('/streaming/*') {
          params[:stream] = params[:splat][0]
          params.delete(:splat)
          # stream_action

          filepath = Api.spaces.directory.join('streams', "#{params[:stream]}.out")
          stream_from do |out|
            tail_file(filepath) do |line|
              send_output(out, line)
            end
          end
        }
      end
    end
  end
end
