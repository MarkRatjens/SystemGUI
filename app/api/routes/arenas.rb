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
          action(:new, **params)
        end

        delete '/arenas/@:identifier' do
          action(:delete, **params)
        end

        put '/arenas/@:identifier' do
          action(:update, **params)
        end

        post '/arenas/@:identifier/install' do
          action(:install, **params)
        end

        post '/arenas/@:identifier/resolve' do
          action(:resolve, **params)
        end

        post '/arenas/@:identifier/pack' do
          action(:pack, **params)
        end

        post '/arenas/@:identifier/provision' do
          action(:provision, **params)
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
