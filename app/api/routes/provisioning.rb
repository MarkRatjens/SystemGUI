module App
  class Api
    module Routes
      module Provisioning
        extend Sinatra::Extension

        # Index provisioning
        get '/provisioning' do
          command do
            ::Spaces::Commands::Querying.new(method: :identifiers, space: :provisioning)
          end
        end

        # Show provisions
        get '/provisioning/:identifier' do
          command do
            ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :provisioning)
          end
        end

        # Delete provisions
        delete '/provisioning/:identifier' do
          command do
            ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :provisioning)
          end
        end

        # Show provisions artifact
        get '/provisioning/:identifier/artifact' do
          command do
            ::Provisioning::Commands::Artifacts.new(identifier: params[:identifier])
          end
        end
      end
    end
  end
end
