module App
  class Api
    module Routes
      module Packing
        extend Sinatra::Extension

        # Index packs
        get '/packs' do
          command do
            ::Spaces::Commands::Querying.new(method: :identifiers, space: :packs)
          end
        end

        # Show pack
        get '/packs/:identifier' do
          command do
            ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :packs)
          end
        end

        # Delete pack
        delete '/packs/:identifier' do
          command do
            ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :packs)
          end
        end

        # Show pack artifact
        get '/packs/:identifier/artifact' do
          command do
            ::Packing::Commands::Artifacts.new(identifier: params[:identifier])
          end
        end
      end
    end
  end
end
