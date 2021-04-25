module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        # Index arenas
        get '/arenas' do
          command do
            Spaces::Commands::Querying.new(method: :identifiers, space: :arenas)
          end
        end

        # Show arena
        get '/arenas/:identifier' do
          command do
            Spaces::Commands::Reading.new(identifier: params[:identifier], space: :arenas)
          end
        end

        # Create an arena
        post '/arenas' do
          command do
            ::Arenas::Commands::Saving.new(identifier: params[:identifier])
          end
        end

        # Bootstrap an arena
        post '/arenas/:identifier/bootstrap' do
          command do
            Bootstrapping::Commands::Initializing.new(identifier: params[:identifier], blueprint_identifier: params[:blueprint_identifier])
          end
        end

        # Resolve an arena
        post '/arenas/:identifier/resolve' do
          command do
            Bootstrapping::Commands::Resolving.new(identifier: params[:identifier])
          end
        end

        # Index arena resolutions
        get '/arenas/:identifier/resolutions' do
          command do
            Spaces::Commands::Querying.new(method: :identifiers, arena_identifier: params[:identifier], space: :resolutions)
          end
        end

        # Delete arena
        delete '/arenas/:identifier' do
          command do
            Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :arenas)
          end
        end
      end
    end
  end
end
