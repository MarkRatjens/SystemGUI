module App
  class Api
    module Routes
      module Installations
        extend Sinatra::Extension

        before '/installations/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :installations)
        end

        get '/installations' do
          action(:index, **params)
        end

        get '/installations/list' do
          action(:list, **params)
        end

        get '/installations/@:identifier' do
          action(:show, **params)
        end

        get '/installations/@:identifier/summary' do
          action(:summary, **params)
        end

        delete '/installations/@:identifier' do
          action(:delete, **params)
        end

        put '/installations/@:identifier' do
          action(:update, **params)
        end
      end
    end
  end
end
