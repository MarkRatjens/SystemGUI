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
          # TODO: USE action(:new, **params)
          if params[:model][:identifier].blank?
            params[:model][:identifier] = params[:model][:blueprint_identifier]
          end
          @controller.control(:new, **params).tap do |payload|
            arena = @controller.control(:show, identifier: payload[:result]).result.to_h
            blueprint = ::Blueprinting::Controllers::Controller.new.control(:show, identifier: params[:model][:blueprint_identifier]).result.to_h
            arena[:about] = blueprint[:about]
            # Saving :blueprint_identifier in :about for the time being.
            # Better for it to be saved in the top-level of arena model.
            arena[:about][:blueprint_identifier] = params[:model][:blueprint_identifier]
            arena[:bindings] = blueprint[:bindings]
            arena[:configuration] = blueprint[:configuration]
            action(:update, model: arena)
          end.to_json
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

        post '/arenas/@:identifier/init' do
          action(:init, **params)
        end

        post '/arenas/@:identifier/plan' do
          action(:plan, **params)
        end

        post '/arenas/@:identifier/apply' do
          action(:apply, **params)
        end
      end
    end
  end
end
