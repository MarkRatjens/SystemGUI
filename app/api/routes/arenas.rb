module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        before '/arenas/?*' do
          @controller = ::Arenas::Controllers::Controller.new
        end

        post '/arenas/@:identifier/assemble' do
          action(action: :install)
        end

        post '/arenas/@:identifier/provision/runtime' do
          # save provisions for the arena's runtime
          action(action: :runtime)
          # RUN INIT HERE?
        end

        post '/arenas/@:identifier/provision/providers' do
          # save provisions for the arena's other providers
          action(action: :provision)
          # RUN APPLY HERE FOR INITIAL PROVISIONING? IT MUST HAPPEN BEFORE ...
        end

        post '/arenas/@:identifier/provision/post-init' do
          # save post-initialization provisions for providers
          action(action: :provision_providers)
          # RUN APPLY HERE FOR INITIAL PROVISIONING?
        end

        post '/arenas/@:identifier/:action' do
          params[:threaded] = true
          action
        end

      end
    end
  end
end
