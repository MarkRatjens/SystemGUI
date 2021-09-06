module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        before '/publications/?*' do
          @controller = ::Publishing::Controllers::Controller.new
        end

        post '/publications/@:identifier/export' do
          @controller.control(command: 'export', **command_args).to_json
        end

        post '/publications/import' do
          # TODO: USE action(:import)
          # TODO: Set thread: true to build in a thread.
          ::Publishing::Controllers::Controller.new(force: true).import({
            model: params[:model],
          }).to_json
        end

        get '/publications/import/output' do
          content_type "text/event-stream"
          stream_output_from(spaces_path_for(:publications, 'import.out'))
        end

        post '/publications/@:identifier/reimport' do
          # TODO: USE action(:import)
          ::Publishing::Controllers::Controller.new(force: true).import({
            model: Api.spaces.universe.locations.by(params[:identifier]).to_h,
          }).to_json
        end

        get '/publications/@:identifier/reimport/output' do
          content_type "text/event-stream"
          stream_output_from(spaces_path_for(:publications, params[:identifier], 'import.out'))
        end

      end
    end
  end
end
