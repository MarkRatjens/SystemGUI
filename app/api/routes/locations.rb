module App
  class Api
    module Routes
      module Locations
        extend Sinatra::Extension

        before '/locations/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :locations)
        end

        put '/locations/@:identifier' do
          if Api.spaces.universe.locations.identifiers.include?(params[:identifier])
            @controller.update(identifier: params[:identifier], model: params[:model]).to_json
          else
            @controller.create(identifier: params[:identifier], model: params[:model]).to_json
          end
        end

      end
    end
  end
end
