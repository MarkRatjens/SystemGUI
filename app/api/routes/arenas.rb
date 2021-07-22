module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension
        include Models

        before '/arenas/@:identifier/?*' do
          @arena = Arena.new(params[:identifier])
        end

        # Index arenas
        get '/arenas' do
          Arena.index.to_json
        end

        # List arenas
        get '/arenas/list' do
          Arena.list.to_json
        end

        # Show arena
        get '/arenas/@:identifier' do
          @arena.to_json
        end

        # Create an arena
        post '/arenas' do
          Arena.create(params[:arena]).to_json
        end

        # Delete arena
        delete '/arenas/@:identifier' do
          @arena.delete.to_json
        end

        # Update arena
        put '/arenas/@:identifier' do
          @arena.save(params[:arena]).to_json
        end

        # Generate resolutions for an arena
        post '/arenas/@:identifier/resolve' do
          @arena.resolutions.generate.to_json
        end

        # Generate packs for an arena
        post '/arenas/@:identifier/pack' do
          @arena.packs.generate.to_json
        end

        # Apply provisions for an arena
        post '/arenas/@:identifier/apply' do
          run do
            ::Spaces::Commands::Executing.new(identifier: params[:identifier], space: :arenas, execute: :apply)
          end.to_json
        end
      end
    end
  end
end
