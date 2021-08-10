module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        before '/publications/?*' do
          @controller = ::Publishing::Controllers::Controller.new
        end

        post '/publications/import' do
          # TODO: USE action(:import, **params)
          ::Publishing::Controllers::Controller.new.import(model: params[:model]).to_json
        end

        post '/publications/@:identifier/export' do
          action(:export, **params)
        end
      end
    end
  end
end
