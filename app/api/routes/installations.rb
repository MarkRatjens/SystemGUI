module App
  class Api
    module Routes
      module Installations
        extend Sinatra::Extension
        include Models

        before '/installations/@:identifier/?*' do
          @installation = Installation.new(params[:identifier])
        end

        # Show installation
        get '/installations/@:identifier' do
          @installation.to_json
        end

        # Delete installation
        delete '/installations/@:identifier' do
          @installation.delete.to_json
        end

        # Update input
        put '/installations/@:identifier/input' do
          @installation.input.save(params[:input]).to_json
        end
      end
    end
  end
end
