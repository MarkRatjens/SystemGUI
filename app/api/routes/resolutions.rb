module App
  class Api
    module Routes
      module Resolutions
        extend Sinatra::Extension

        # Index resolutions
        get '/resolutions' do
          command do
            ::Spaces::Commands::Querying.new(method: :identifiers, space: :resolutions)
          end
        end

        # Show resolution
        get '/resolutions/:identifier' do
          command do
            ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :resolutions)
          end
        end

        # Update resolution
        put '/resolutions/:identifier' do
          command do
            ::Resolving::Commands::Updating.new(identifier: params[:identifier], model: JSON.parse(request.body.read))
          end
        end

        # Delete resolution
        delete '/resolutions/:identifier' do
          command do
            ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :resolutions)
          end
        end

        # Show validity for a resolution
        get '/resolutions/:identifier/validity' do
          (
            ::Spaces::Commands::Validating.new(identifier: params[:identifier], space: :resolutions).run.errors || {}
          ).to_json
        end

        # Show packing and provisioning status for a resolution
        get '/resolutions/:identifier/status' do
          command do
            ::Spaces::Commands::Status.new(identifier: params[:identifier], space: :resolutions)
          end
        end

        # Create a pack for a resolution
        post '/resolutions/:identifier/pack' do
          command do
            ::Packing::Commands::Saving.new(identifier: params[:identifier])
          end
        end

        # Create provisions for a resolution
        post '/resolutions/:identifier/provision' do
          command do
            ::Provisioning::Commands::Saving.new(identifier: params[:identifier])
          end
        end
      end
    end
  end
end
