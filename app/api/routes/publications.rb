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
          # TODO: Import should be initiated with a POST.
          # Doing it in the GET below as hack to get SSE to client for JS dev work.
          # TODO: USE action(:import)
          #       OR ::Publishing::Controllers::Controller.new.import(model: params[:model]).to_json
          {result: {model: params[:model]}}.to_json
        end

        get '/publications/import/follow' do
          content_type "text/event-stream"
          params[:resource] = :publications
          params[:command] = :import
          streaming
        end

        post '/publications/@:identifier/reimport' do
          # TODO: Import should be initiated with a POST.
          # Doing it in the GET below as hack to get SSE to client for JS dev work.
          # TODO: USE action(:import)
          #       OR ::Publishing::Controllers::Controller.new.import(identifier: params[:identifier]).to_json
          {result: {identifier: params[:identifier]}}.to_json
        end

        get '/publications/@:identifier/reimport/follow' do
          content_type "text/event-stream"
          params[:resource] = :publications
          params[:command] = :import
          streaming
        end
      end
    end
  end
end
