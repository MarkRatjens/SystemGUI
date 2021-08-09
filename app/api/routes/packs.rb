module App
  class Api
    module Routes
      module Packs
        extend Sinatra::Extension

        before '/packs/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :packing)
        end

        get '/packs' do
          action(:index, **params)
        end

        get '/packs/@:identifier' do
          # TODO: USE action(:show, **params)
          ::Packing::Controllers::Controller.new.show(identifier: params[:identifier]).to_json
        end

        get '/packs/@:identifier/artifacts' do
          # TODO: USE action(:artifacts, **params)
          ::Packing::Controllers::Controller.new.artifacts(identifier: params[:identifier]).to_json
        end

        post '/packs/@:identifier/commit' do
          # TODO: USE action(:commit, **params)
          ::Packing::Controllers::Controller.new.commit(identifier: params[:identifier]).to_json
        end

      end
    end
  end
end
