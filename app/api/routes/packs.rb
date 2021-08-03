module App
  class Api
    module Routes
      module Packs
        extend Sinatra::Extension

        before '/packs/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :packs)
        end

        get '/packs' do
          action(:index, **params)
        end

      end
    end
  end
end
