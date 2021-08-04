module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        before '/publications/?*' do
          @controller = ::Publishing::Controllers::Controller.new
        end

        post '/publications/import' do
          model = {}
          model['repository'] = params[:model][:repository] if params[:model][:repository]
          model['branch'] = params[:model][:branch] if params[:model][:branch]
          model['identifier'] = params[:model][:identifier] if params[:model][:identifier]
          action(:import, model: model)
        end

        post '/publications/@:identifier/export' do
          action(:export, identifier: params[:identifier])
        end

        post '/publications/@:identifier/import' do
          action(:import, identifier: params[:identifier])
        end

# ::Publishing::Commands::Importing.new(identifier: params[:identifier], force: true).run.payload.to_json

      end
    end
  end
end
