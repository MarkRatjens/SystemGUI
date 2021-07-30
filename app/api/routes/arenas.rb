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
          {result: Arena.index}.to_json
        end

        # List arenas
        get '/arenas/list' do
          {result: Arena.list}.to_json
        end

        # Show arena
        get '/arenas/@:identifier' do
          {result: @arena}.to_json
        end

        # Create an arena
        post '/arenas' do
          Arena.create(params[:arena]).to_json
        end

        # Delete arena
        delete '/arenas/@:identifier' do
          {result: @arena.delete}.to_json
        end

        # Update arena
        put '/arenas/@:identifier' do
          {result: @arena.save(params[:arena])}.to_json
        end

        # Generate resolutions for an arena
        post '/arenas/@:identifier/resolve' do
          {result: @arena.resolutions.generate}.to_json
        end

        # Generate packs for an arena
        post '/arenas/@:identifier/pack' do
          {result: @arena.packs.generate}.to_json
        end

        # Apply provisions for an arena
        post '/arenas/@:identifier/apply' do
          {result: @arena.apply}.to_json
        end
      end
    end
  end
end
