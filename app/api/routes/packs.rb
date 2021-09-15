module App
  class Api
    module Routes
      module Packs
        extend Sinatra::Extension

        before '/packs/?*' do
          # TODO: USE @controller = ::Spaces::Controllers::RESTController.new(space: :packing)
          # Currently not working for commit/build
          @controller = ::Packing::Controllers::Controller.new
        end

        get '/packs/@:identifier/summary' do
          {result: {log: {exist: false}}}.to_json
        end

        get '/packs/@:identifier/artifact' do
          # TODO: USE action(:artifacts)
          {
            result: Api.spaces.universe.packs.provider_aspect_for(
              Api.spaces.universe.packs.by('my-arena::wap'),
              Api.spaces.universe.packs
            ).artifact
          }.to_json
        end

        post '/packs/@:identifier/build' do
          params[:threaded] = true
          action(action: :commit)
        end

      end
    end
  end
end
