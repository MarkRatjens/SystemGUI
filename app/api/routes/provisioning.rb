module App
  class Api
    module Routes
      module Provisioning
        extend Sinatra::Extension

        before '/provisioning/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :provisioning)
        end

        get '/provisioning' do
          action(:index, **params)
        end

        get '/provisioning/@:identifier' do
          action(:show, **params)
        end

      end
    end
  end
end
