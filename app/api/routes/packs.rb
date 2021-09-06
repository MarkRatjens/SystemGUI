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
          # TODO: Set thread: true to build in a thread.
          action(:commit)
        end

        get '/packs/@:identifier/build/output' do
          content_type "text/event-stream"
          stream_output_from(spaces_path_for(:packs, *params[:identifier].split('::'), 'build.out'))
        end

      end
    end
  end
end
