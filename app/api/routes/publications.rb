module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        # Index publications
        get '/publications' do
          Api.spaces.run do
            ::Spaces::Commands::Querying.new(method: :identifiers, space: :publications)
          end.to_json
        end

        # Create publication
        # TODO: this should no longer work. The importing command now takes a location identifier NOT a descriptor
        post '/publications' do
          descriptor = params[:descriptor].to_h.transform_keys(&:to_sym).delete_if{|k, v| v.empty?}
          Api.spaces.run do
            ::Publishing::Commands::Importing.new(model: descriptor, force: false)
          end.to_json
        end

        # Show publication
        get '/publications/:identifier' do
          Api.spaces.run do
            ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :publications)
          end.to_json
        end

        # Show publication status
        get '/publications/:identifier/status' do
          Api.spaces.run do
            ::Spaces::Commands::Status.new(identifier: params[:identifier], space: :publications)
          end.to_json
        end

        # Delete publication
        delete '/publications/:identifier' do
          Api.spaces.run do
            ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :publications)
          end.to_json
        end

        # Create publication blueprint
        # TODO: check this. it looks wrong
        post '/publications/:identifier/blueprint' do
          ::Spaces::Commands::Saving.new(identifier: params[:identifier], space: :blueprints).run
          Api.spaces.run do
            ::Blueprinting::Commands::Synchronizing.new(identifier: params[:identifier])
          end.to_json
        end

        # Synchronize publication with blueprint
        post '/publications/:identifier/sync' do
          Api.spaces.run do
            ::Publishing::Commands::Synchronizing.new(identifier: params[:identifier])
          end.to_json
        end

        # Export publication
        post '/publications/:identifier/export' do
          Api.spaces.run do
            ::Publishing::Commands::Exporting.new(identifier: params[:identifier], message: params[:message])
          end.to_json
        end
      end
    end
  end
end
