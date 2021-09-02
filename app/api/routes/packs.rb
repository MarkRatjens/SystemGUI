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

        get '/packs/@:identifier' do
          # TODO: USE action(:show)
          ::Packing::Controllers::Controller.new
          .show(identifier: params[:identifier]).to_json
        end

        get '/packs/@:identifier/summary' do
          pack = Api.spaces.universe.packs.by(params[:identifier])
          filepath = Api.spaces.universe.packs.path_for(pack).join('build.log')
          {result: {log: {exist: File.exists?(filepath)}}}.to_json
        end

        get '/packs/@:identifier/artifacts' do
          # TODO: USE action(:artifacts)
          ::Packing::Controllers::Controller.new.artifacts(identifier: params[:identifier]).to_json
        end

        post '/packs/@:identifier/build' do
          # TODO: Build should be initiated with a POST.
          # Doing it in the GET below as hack to get SSE to client for JS dev work.
          # TODO: USE action(:commit)
          #       OR ::Packing::Controllers::Controller.new.commit(identifier: params[:identifier]).to_json
          {result: {identifier: params[:identifier]}}.to_json
          # action(:commit)
        end

        get '/packs/@:identifier/build/follow' do
          content_type "text/event-stream"
          params[:command] = :commit
          streaming
        end

        get '/packs/@:identifier/log' do
          pack = Api.spaces.universe.packs.by(params[:identifier])
          filepath = Api.spaces.universe.packs.path_for(pack).join('build.log')
          {result: File.read(filepath)}.to_json
        end
      end
    end
  end
end
