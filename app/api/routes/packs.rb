module App
  class Api
    module Routes
      module Packs
        extend Sinatra::Extension

        before '/packs/?*' do
          @controller = ::Packing::Controllers::Controller.new
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
          action(action: :build)
        end

      end
    end
  end
end
