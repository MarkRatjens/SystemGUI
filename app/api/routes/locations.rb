module App
  class Api
    module Routes
      module Locations
        extend Sinatra::Extension

        before '/locations/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :locations)
        end

        put '/locations/@:identifier' do
          @controller.update(identifier: params[:identifier], model: params[:model]).to_json
        end

      end
    end
  end
end
