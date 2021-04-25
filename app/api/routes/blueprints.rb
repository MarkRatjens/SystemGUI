module App
  class Api
    module Routes
      module Blueprints
        extend Sinatra::Extension

        # Index blueprints
        get '/blueprints' do
          command do
            Spaces::Commands::Querying.new(method: :identifiers, space: :blueprints)
          end
        end

        # Show blueprint
        get '/blueprints/:identifier' do
          command do
            Spaces::Commands::Reading.new(identifier: params[:identifier], space: :blueprints)
          end
        end

        # Show blueprint status
        get '/blueprints/:identifier/status' do
          command do
            Spaces::Commands::Status.new(identifier: params[:identifier], space: :blueprints)
          end
        end

        # Index blueprint resolutions
        get '/blueprints/:identifier/resolutions' do
          command do
            Spaces::Commands::Querying.new(method: :identifiers, blueprint_identifier: params[:identifier], space: :resolutions)
          end
        end

        # Delete blueprint
        delete '/blueprints/:identifier' do
          command do
            Spaces::Commands::Deleting.new(identifier: params[:identifier], space: :blueprints)
          end
        end

        # Create blueprint
        post '/blueprints' do
          command do
            Spaces::Commands::Saving.new(identifier: params[:identifier], space: :blueprints)
          end
        end

        # Update blueprint
        put '/blueprints/:identifier' do
          command do
            Spaces::Commands::Saving.new(JSON.parse(request.body.read), space: :blueprints)
          end
        end

        # Show a blueprint and its bindings as a graph.
        get '/blueprints/:identifier/graph' do
          command do
            Spaces::Commands::Graphing.new(identifier: params[:identifier], space: :blueprints)
          end
        end

        # Synchronize blueprint with publication
        post '/blueprints/:blueprint_identifier/sync' do
          command do
            Blueprinting::Commands::Synchronizing.new(identifier: params[:blueprint_identifier])
          end
        end

        # BLUEPRINT ICON

        # Send icon.
        get '/blueprints/:identifier/icon' do
          icon = Models::Icon.new(params[:identifier])
          send_file(icon.path, type: 'image/png')
        end

        # Send icon with border.
        get '/blueprints/:identifier/icon/bordered' do
          icon = Models::Icon.new(params[:identifier])
          send_file(icon.bordered_path, type: 'image/png')
        end

        # Update icon
        put '/blueprints/:identifier/icon' do
          icon = Models::Icon.new(params[:identifier])
          icon.update(params[:icon][:tempfile])
          nil.to_json
        end

        # Delete icon
        delete '/blueprints/:identifier/icon' do
          icon = Models::Icon.new(params[:identifier])
          icon.delete
          nil.to_json
        end

        # BLUEPRINT LICENSE

        # Show blueprint license.
        get '/blueprints/:identifier/license' do
          license_path = universe.blueprints.path.join(params[:identifier], 'LICENSE.md')
          content_type 'text/markdown'
          if license_path.exist?
            license_path.read
          else
            ''
          end
        end

        # Update blueprint license.
        put '/blueprints/:identifier/license' do
          license_path = universe.blueprints.path.join(params[:identifier], 'LICENSE.md')
          license_text = params[:license]
          license_path.write(license_text)
          nil.to_json
        end

        # BLUEPRINT README

        # Show blueprint readme.
        get '/blueprints/:identifier/readme' do
          readme_path = universe.blueprints.path.join(params[:identifier], 'README.md')
          content_type 'text/markdown'
          if readme_path.exist?
            readme_path.read
          else
            ''
          end
        end

        # Update blueprint readme.
        put '/blueprints/:identifier/readme' do
          readme_path = universe.blueprints.path.join(params[:identifier], 'README.md')
          readme_text = params[:readme]
          readme_path.write(readme_text)
          nil.to_json
        end

      end
    end
  end
end
