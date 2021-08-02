module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension
        include Models

        # before '/arenas/?*' do
        #   @controller = ::Arenas::Controllers::Controller.new
        # end

        before '/arenas/@:identifier/?*' do
          @arena = Arena.new(params[:identifier])
        end

        # Index arenas
        get '/arenas' do
          # @controller.control(:index).to_json
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

        # Show arena installations
        get '/arenas/@:identifier/installations' do
          {result: @arena.installations}.to_json
        end

        # Show arena resolutions
        get '/arenas/@:identifier/resolutions' do
          {result: @arena.resolutions}.to_json
        end

        # Show arena packs
        get '/arenas/@:identifier/packs' do
          {result: @arena.packs}.to_json
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
