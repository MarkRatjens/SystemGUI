module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        before '/arenas/?*' do
          @controller = ::Arenas::Controllers::Controller.new
        end

        post '/arenas/@:identifier/assemble' do
          action(:install)
        end

        post '/arenas/@:identifier/provision/runtime' do
          # save provisions for the arena's runtime
          action(:runtime)
          # RUN INIT HERE?
        end

        post '/arenas/@:identifier/provision/providers' do
          # save provisions for the arena's other providers
          action(:provision)
          # RUN APPLY HERE FOR INITIAL PROVISIONING? IT MUST HAPPEN BEFORE ...
        end

        post '/arenas/@:identifier/provision/post-init' do
          # save post-initialization provisions for providers
          action(:provision_providers)
          # RUN APPLY HERE FOR INITIAL PROVISIONING?
        end

        # TODO: Terraform instruction should be initiated with a POST.
        # Doing it in the GET below as hack to get SSE to client for JS dev work.
        # TODO: USE action(:init)
        post '/arenas/@:identifier/instruction' do
          {result: params[:command]}.to_json
        end

        get '/arenas/@:identifier/instruction' do
          content_type "text/event-stream"
          streaming
        end
      end
    end
  end
end
