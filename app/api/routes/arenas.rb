module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        # Index arenas
        get '/arenas' do
          command do
            ::Spaces::Commands::Querying.new(method: :identifiers, space: :arenas)
          end
        end

        # Show arena
        get '/arenas/:identifier' do
          command do
            ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :arenas)
          end
        end

        # Arena status
        get '/arenas/:identifier/status' do
          arena = ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :arenas).run.payload.result
          bindings = arena.bindings.map &:target_identifier
          resolutions = ::Spaces::Commands::Querying.new(method: :identifiers, arena_identifier: params[:identifier], space: :resolutions).run.payload.result.map {|resolution| resolution.split('::')[1]}
          bounds = bindings.select{|binding| resolutions.include? binding}
          unbounds = resolutions - bounds
          {bounds: bounds, unbounds: unbounds}.to_json
        end

        # Create an arena
        post '/arenas' do
          command do
            ::Arenas::Commands::Saving.new(identifier: params[:identifier])
          end
        end

        # Bootstrap an arena
        post '/arenas/:identifier/bind' do
          command do
            ::Arenas::Commands::Binding.new(
              identifier: params[:identifier],
              blueprint_identifier: params[:blueprint_identifier]
            )
          end
        end

        # Resolve an arena
        post '/arenas/:identifier/resolve' do
          command do
            ::Arenas::Commands::Resolving.new(identifier: params[:identifier])
          end
        end

        # Index arena resolutions
        get '/arenas/:identifier/resolutions' do
          command do
            ::Spaces::Commands::Querying.new(method: :identifiers, arena_identifier: params[:identifier], space: :resolutions)
          end
        end

        # Index packable arena resolutions
        get '/arenas/:identifier/packable' do
          resolution_identifiers = ::Spaces::Commands::Querying.new(method: :identifiers, arena_identifier: params[:identifier], space: :resolutions).run.payload.result
          resolution_identifiers.select do |resolution_identifier|
            ::Spaces::Commands::Reading.new(identifier: resolution_identifier, space: :resolutions).run.payload.result.packable?
          end.to_json
        end

        # Delete arena
        delete '/arenas/:identifier' do
          command do
            ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :arenas)
          end
        end

        # Apply provisions for an arena
        post '/arenas/:identifier/apply' do
          command do
            ::Spaces::Commands::Executing.new(identifier: params[:identifier], space: :arenas, execute: :apply)
          end
        end
      end
    end
  end
end
