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

        post '/arenas/@:identifier/:instruction' do
          action(params[:instruction])
        end

        get '/arenas/@:identifier/:instruction/output' do
          content_type "text/event-stream"
          stream_output_from(spaces_path_for(:arenas, params[:identifier], "#{params[:instruction]}.out"))
        end
      end
    end
  end
end
