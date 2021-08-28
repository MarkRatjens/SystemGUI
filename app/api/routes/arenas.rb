module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        before '/arenas/?*' do
          @controller = ::Arenas::Controllers::Controller.new
        end

        get '/arenas' do
          action(:index, **params)
        end

        get '/arenas/list' do
          action(:list, **params)
        end

        get '/arenas/@:identifier' do
          action(:show, **params)
        end

        post '/arenas' do
          action(:new, **params)
        end

        delete '/arenas/@:identifier' do
          action(:delete, **params)
        end

        put '/arenas/@:identifier' do
          action(:update, **params)
        end

        get '/arenas/@:identifier/state' do
          action(:state, **params)
        end

        post '/arenas/@:identifier/assemble' do
          action(:install, **params)
        end

        post '/arenas/@:identifier/resolve' do
          action(:resolve, **params)
        end

        post '/arenas/@:identifier/pack' do
          action(:pack, **params)
        end

        post '/arenas/@:identifier/provision/runtime' do
          # save provisions for the arena's runtime
          action(:runtime, **params)
          # RUN INIT HERE?
        end

        post '/arenas/@:identifier/provision/providers' do
          # save provisions for the arena's other providers
          action(:provision, **params)
          # RUN APPLY HERE FOR INITIAL PROVISIONING? IT MUST HAPPEN BEFORE ...
        end

        post '/arenas/@:identifier/provision/post-init' do
          # save post-initialization provisions for providers
          action(:provision_providers, **params)
          # RUN APPLY HERE FOR INITIAL PROVISIONING?
        end

        # TODO: Terraform instruction should be initiated with a POST.
        # Doing it in the GET below as hack to get SSE to client for JS dev work.
        # TODO: USE action(:init, **params)
        post '/arenas/@:identifier/instruction' do
          {result: params[:instruction]}.to_json
        end

        get '/arenas/@:identifier/instruction' do
          content_type "text/event-stream"
          stream_for(**params)
        end
      end
    end
  end
end
