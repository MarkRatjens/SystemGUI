module App
  class Api
    module Routes
      module Resolutions
        extend Sinatra::Extension

        # Index resolutions
        get '/resolutions' do
          command do
            Spaces::Commands::Querying.new(method: :identifiers, space: :resolutions)
          end
        end

        # Show resolution
        get '/resolutions/:identifier' do
          command do
            Spaces::Commands::Reading.new(identifier: params[:identifier], space: :resolutions)
          end
        end

        # Create resolution
        # TODO: Use Spaces command
        post '/resolutions' do
          # command do
          #   Blueprinting::Commands::Resolving.new(identifier: params[:arena_identifier], arena_identifier: params[:blueprint_identifier])
          # end
          arena = universe.arenas.by(params[:arena_identifier])
          blueprint = universe.blueprints.by(params[:blueprint_identifier])
          resolution = blueprint.with_embeds.resolved_in(arena)
          universe.resolutions.save(resolution)
          resolution.identifier.to_json
        end

        # Update resolution
        # TODO: Use Spaces command
        put '/resolutions/:identifier' do
          # command do
          #   Spaces::Commands::Saving.new(JSON.parse(request.body.read), space: :resolutions)
          # end
          struct = JSON.parse(request.body.read).to_struct
          resolution = Resolving::Resolution.new(struct: struct)
          universe.resolutions.save(resolution)
          resolution.identifier.to_json
        end

        # Delete resolution
        delete '/resolutions/:identifier' do
          command do
            Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :resolutions)
          end
        end

        # Show validity for a resolution
        # TODO: Use Spaces command
        get '/resolutions/:identifier/validity' do
          # command do
          #   Spaces::Commands::Validating.new(identifier: params[:identifier], space: :resolutions)
          # end
          resolution = universe.resolutions.by(params[:identifier])
          {}.tap do |result|
            result[:errors] = {
              incomplete_divisions: resolution.incomplete_divisions
              } if resolution.incomplete_divisions.any?
            end.to_json
        end

        # Show packing and provisioning status for a resolution
        get '/resolutions/:identifier/status' do
          command do
            Spaces::Commands::Status.new(identifier: params[:identifier], space: :resolutions)
          end
        end

        # Show a resolution and its bindings as a graph.
        get '/resolutions/:identifier/graph' do
          command do
            Spaces::Commands::Graphing.new(identifier: params[:identifier], space: :resolutions)
          end
        end

        # Create a pack for a resolution
        post '/resolutions/:identifier/pack' do
          command do
            Packing::Commands::Saving.new(identifier: params[:identifier])
          end
        end

        # Create provisions for a resolution
        post '/resolutions/:identifier/provision' do
          command do
            Provisioning::Commands::Saving.new(identifier: params[:identifier])
          end
        end
      end
    end
  end
end
