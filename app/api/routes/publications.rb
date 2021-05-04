module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        # Index publications
        get '/publications' do
          command do
            ::Spaces::Commands::Querying.new(method: :identifiers, space: :publications)
          end
        end

        # Create publication
        post '/publications' do
          descriptor = params[:descriptor].to_h.transform_keys(&:to_sym).delete_if{|k, v| v.empty?}
          command do
            ::Publishing::Commands::Importing.new(model: descriptor, force: false)
          end
        end

        # Show publication
        get '/publications/:identifier' do
          command do
            ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :publications)
          end
        end

        # Show publication status
        get '/publications/:identifier/status' do
          command do
            ::Spaces::Commands::Status.new(identifier: params[:identifier], space: :publications)
          end
        end

        # Delete publication
        delete '/publications/:identifier' do
          command do
            ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :publications)
          end
        end

        # Create publication blueprint
        post '/publications/:identifier/blueprint' do
          ::Spaces::Commands::Saving.new(identifier: params[:identifier], space: :blueprints).run
          command do
            ::Blueprinting::Commands::Synchronizing.new(identifier: params[:identifier])
          end
        end

        # Synchronize publication with blueprint
        post '/publications/:identifier/sync' do
          command do
            ::Publishing::Commands::Synchronizing.new(identifier: params[:identifier])
          end
        end
      end
    end
  end
end
