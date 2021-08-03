module App
  class Api
    module Routes
      module Installations
        extend Sinatra::Extension

        before '/installations/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :installations)
        end

        get '/installations/@:identifier' do
          action(:show, **params)
        end

        get '/installations/@:identifier/summary' do
          action(:summary, **params)
        end

        delete '/installations/@:identifier' do
          action(:delete, **params)
        end

        put '/installations/@:identifier' do
          action(:update, **params)
        end

        # Update input
        # TODO is this needed?
        put '/installations/@:identifier/input' do
          installation = ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :installations).run.payload.result.to_h
          installation[:input] = params[:input].to_h
          ::Spaces::Commands::Saving.new(identifier: params[:identifier], model: installation, space: :installations).run.payload.to_json
        end
      end
    end
  end
end
