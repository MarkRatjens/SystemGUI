module App
  class Api
    module Routes
      module Installations
        extend Sinatra::Extension
        include Models

        # Show installation
        get '/installations/@:identifier' do
          ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :installations).run.payload.to_json
        end

        # Show installation status
        get '/installations/@:identifier/status' do
          ::Spaces::Commands::Status.new(identifier: params[:identifier], space: :installations).run.payload.to_json
        end

        # Delete installation
        delete '/installations/@:identifier' do
          ::Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :installations).run.payload.to_json
        end

        # Update input
        put '/installations/@:identifier/input' do
          installation = ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :installations).run.payload.result.to_h
          installation[:input] = params[:input].to_h
          ::Spaces::Commands::Saving.new(identifier: params[:identifier], model: installation, space: :installations).run.payload.to_json
        end
      end
    end
  end
end
