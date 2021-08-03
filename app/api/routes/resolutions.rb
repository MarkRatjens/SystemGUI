module App
  class Api
    module Routes
      module Resolutions
        extend Sinatra::Extension

        before '/resolutions/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :resolutions)
        end

        get '/resolutions' do
          action(:index, **params)
        end

        get '/resolutions/list' do
          action(:list, **params)
        end

        get '/resolutions/@:identifier' do
          action(:show, **params)
        end

        get '/resolutions/@:identifier/summary' do
          action(:summary, **params)
        end

        delete '/resolutions/@:identifier' do
          action(:delete, **params)
        end

      end
    end
  end
end
