module App
  class Api
    module Routes
      module Blueprints
        extend Sinatra::Extension
        include Models

        before '/blueprints/@:identifier/?*' do
          @blueprint = Blueprint.new(params[:identifier])
        end

        # Index blueprints
        get '/blueprints' do
          Blueprint.index.to_json
        end

        # List blueprints
        get '/blueprints/list' do
          Blueprint.list.to_json
        end

        # Create blueprint
        post '/blueprints' do
          Blueprint.create(params[:blueprint]).to_json
        end

        # Import blueprint
        post '/blueprints/import' do
          Blueprint.import(params[:import]).to_json
        end

        # Show blueprint
        get '/blueprints/@:identifier' do
          @blueprint.to_json
        end

        # Reimport blueprint
        post '/blueprints/@:identifier/reimport' do
          @blueprint.reimport.to_json
        end

        # Delete blueprint
        delete '/blueprints/@:identifier' do
          @blueprint.delete.to_json
        end

        # Show blueprint specification, i.e. blueprint.json
        get '/blueprints/@:identifier/specification' do
          @blueprint.specification.to_json
        end

        # Update blueprint specification, i.e. blueprint.json
        put '/blueprints/@:identifier/specification' do
          @blueprint.specification.save(params[:specification]).to_json
        end

        # Publish blueprint
        post '/blueprints/@:identifier/publication' do
          @blueprint.publication.create(params[:publication]).to_json
        end

        # Unpublish blueprint
        delete '/blueprints/@:identifier/publication' do
          @blueprint.publication.delete.to_json
        end

        # Export blueprint publication
        post '/blueprints/@:identifier/publication/export' do
          @blueprint.publication.export(params[:export]).to_json
        end

        # Show publication diff
        get '/blueprints/@:identifier/publication/diff' do
          @blueprint.publication.diff.to_json
        end

        # Set blueprint publication branch
        post '/blueprints/@:identifier/publication/branch' do
          @blueprint.publication.checkout(params[:branch]).to_json
        end

        # FORM

        # Show blueprint form, i.e. form.json
        get '/blueprints/@:identifier/form' do
          @blueprint.form.to_json
        end

        # Update blueprint form, i.e. form.json
        put '/blueprints/@:identifier/form' do
          @blueprint.form.save(deep_to_h(params[:form])).to_json
        end

        # LICENSE

        # Show blueprint license.
        get '/blueprints/@:identifier/license' do
          content_type 'text/markdown'
          @blueprint.license.to_s
        end

        # Update blueprint license.
        put '/blueprints/@:identifier/license' do
          @blueprint.license.save(params[:license]).to_json
        end

        # README

        # Show blueprint readme.
        get '/blueprints/@:identifier/readme' do
          content_type 'text/markdown'
          @blueprint.readme.to_s
        end

        # Update blueprint readme.
        put '/blueprints/@:identifier/readme' do
          @blueprint.readme.save(params[:readme]).to_json
        end

        # ICON

        # Show icon metadata.
        get '/blueprints/@:identifier/icon' do
          @blueprint.icon.to_json
        end

        # Send raw icon.
        get '/blueprints/@:identifier/icon/raw' do
          return nil unless @blueprint.icon.exist?
          send_file(@blueprint.icon.raw_path, type: 'image/png')
        end

        # Send icon thumbnail.
        get '/blueprints/@:identifier/icon/thumbnail' do
          send_file(@blueprint.icon.thumbnail_path, type: 'image/png')
        end

        # Send icon with border.
        get '/blueprints/@:identifier/icon/bordered' do
          send_file(@blueprint.icon.bordered_path, type: 'image/png')
        end

        # Update icon
        put '/blueprints/@:identifier/icon' do
          @blueprint.icon.save(params[:icon][:tempfile]).to_json
        end

        # Delete icon
        delete '/blueprints/@:identifier/icon' do
          @blueprint.icon.delete.to_json
        end

        # FILES

        # List files.
        get '/blueprints/@:identifier/files' do
          @blueprint.files.list.to_json
        end

        # Create file.
        post '/blueprints/@:identifier/files' do
          @blueprint.files.create(params[:filepath]).to_json
        end

        # Show file.
        get '/blueprints/@:identifier/files/@*' do
          content_type 'text/plain'
          @blueprint.files.find(params[:splat][0]).to_s
        end

        # Update file.
        put '/blueprints/@:identifier/files/@*' do
          @blueprint.files.find(params[:splat][0]).save(params[:file]).to_json
        end

        # Delete file.
        delete '/blueprints/@:identifier/files/@*' do
          @blueprint.files.find(params[:splat][0]).delete.to_json
        end
      end
    end
  end
end
