module App
  class Api
    module Routes
      module Locations
        extend Sinatra::Extension

        before '/locations/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :locations)
        end

        get '/locations/@:identifier' do
          action(:show, **params)
        end

        put '/locations/@:identifier' do
          action(:update, **params)
        end

      end
    end
  end
end
