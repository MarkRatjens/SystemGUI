module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        before '/publications/?*' do
          @controller = ::Publishing::Controllers::Controller.new
        end

        post '/publications/import' do
          action(:import, **params)
        end

        post '/publications/@:identifier/export' do
          action(:export, **params)
        end
      end
    end
  end
end
