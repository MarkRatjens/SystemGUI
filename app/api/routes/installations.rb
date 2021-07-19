module App
  class Api
    module Routes
      module Resolutions
        extend Sinatra::Extension

        # before '/installations/@:identifier/?*' do
        #   @installation = Installation.new(params[:identifier])
        # end

        # Index installations
        get '/installations' do
          Api.spaces.run do
            ::Spaces::Commands::Querying.new(
              method: :identifiers,
              space: :installations
            )
          end.to_json
        end

        # Show installation
        get '/installations/@:identifier' do
          Api.spaces.run do
            ::Spaces::Commands::Reading.new(
              identifier: params[:identifier],
              space: :installations
            )
          end.to_json
        end

        # Show status for a installation
        get '/installations/@:identifier/status' do
          Api.spaces.run do
            ::Spaces::Commands::Status.new(
              identifier: params[:identifier],
              space: :installations
            )
          end.to_json
        end

        # Delete installation
        delete '/installations/@:identifier' do
          Api.spaces.run do
            ::Spaces::Commands::Deleting.new(
              identifier: params[:identifier],
              space: :installations
            )
          end.to_json
        end

        # Update input
        put '/installations/@:identifier/input' do
          installation = Api.spaces.run do
            ::Spaces::Commands::Reading.new(
              identifier: params[:identifier],
              space: :installations
            )
          end.to_h
          installation[:input] = params[:input].to_h
          Api.spaces.run do
            ::Spaces::Commands::Saving.new(
              identifier: params[:identifier],
              model: installation,
              space: :installations,
            )
          end.to_json
        end


        # # Check if installation exists
        # get '/installations/@:identifier/exist' do
        #   universe.installations.exist?(params[:identifier]).to_json
        # end

        # # Update installation
        # put '/installations/@:identifier' do
        #   command do
        #     ::Resolving::Commands::Updating.new(identifier: params[:identifier], model: JSON.parse(request.body.read))
        #   end
        # end
        #
        #
        # # Show validity for a installation
        # get '/installations/@:identifier/validity' do
        #   (
        #     ::Spaces::Commands::Validating.new(identifier: params[:identifier], space: :installations).run.errors || {}
        #   ).to_json
        # end
        #

        #
        # # Reset a installation
        # post '/installations/@:identifier/reset' do
        #   command do
        #
        #   end
        # end
        #
        # # Create a pack for a installation
        # post '/installations/@:identifier/pack' do
        #   command do
        #     ::Packing::Commands::Saving.new(identifier: params[:identifier])
        #   end
        # end
        #
        # # Create provisions for a installation
        # post '/installations/@:identifier/provision' do
        #   command do
        #     ::Provisioning::Commands::Saving.new(identifier: params[:identifier])
        #   end
        # end
      end
    end
  end
end
