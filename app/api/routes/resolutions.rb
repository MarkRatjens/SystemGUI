module App
  class Api
    module Routes
      module Resolutions
        extend Sinatra::Extension
        include Models

        # Show resolution
        get '/resolutions/@:identifier' do
          ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :resolutions).run.payload.to_json
        end

        # Show resolution status
        get '/resolutions/@:identifier/status' do
          ::Spaces::Commands::Status.new(identifier: params[:identifier], space: :resolutions).run.payload.to_json
        end

        # Delete resolution
        delete '/resolutions/@:identifier' do
          ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :resolutions).run.payload.to_json
        end
      end
    end
  end
end
