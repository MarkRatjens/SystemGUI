module App
  class Api
    module Routes
      module Blueprints
        extend Sinatra::Extension
        include Models

        before '/blueprints/?*' do
          @controller = ::Blueprinting::Controllers::Controller.new
        end

        before '/blueprints/@:identifier/?*' do
          @blueprint = Blueprint.new(params[:identifier])
        end

        # Index blueprints
        get '/blueprints' do
          action(:index)
        end

        # List blueprints
        get '/blueprints/list' do
          action(:list)
        end

        # Create blueprint
        post '/blueprints' do
          action(:new, model: params[:blueprint])
        end

        # Import blueprint
        post '/blueprints/import' do
          ::Spaces::Commands::Saving.new(model: params[:import], space: :locations).run.payload.tap do |payload|
            ::Publishing::Commands::Importing.new(identifier: payload.result, force: true).run
          end.to_json
        end

        # Show blueprint
        get '/blueprints/@:identifier' do
          @controller.control(:show, identifier: params[:identifier]).to_json
        end

        # Delete blueprint
        delete '/blueprints/@:identifier' do
          @controller.control(:delete, identifier: params[:identifier]).to_json
        end

        # Update blueprint
        put '/blueprints/@:identifier' do
          @controller.control(:update, model: params[:blueprint]).to_json
        end

        # Show blueprint location
        get '/blueprints/@:identifier/location' do
          return {result: nil}.to_json unless Api.spaces.universe.locations.exist?(params[:identifier])
          ::Spaces::Commands::Reading.new(identifier: params[:identifier], space: :locations).run.payload.to_json
        end

        # Update blueprint location
        put '/blueprints/@:identifier/location' do
          ::Spaces::Commands::Saving.new(identifier: params[:identifier], model: params[:location], space: :locations).run.payload.to_json
        end

        # Reimport blueprint
        post '/blueprints/@:identifier/reimport' do
          ::Publishing::Commands::Importing.new(identifier: params[:identifier], force: true).run.payload.to_json
        end

        # Export blueprint
        post '/blueprints/@:identifier/publication/export' do
          # @blueprint.publication.export(params[:export]).to_json
          ::Publishing::Commands::Exporting.new(
            identifier: params[:identifier]
          ).run.payload.to_json
        end

        # Show blueprint relations
        get '/blueprints/@:identifier/relations' do
          {result: @blueprint.relations}.to_json
        end

        # FORM

        # Show blueprint form, i.e. form.json
        get '/blueprints/@:identifier/form' do
          {result: @blueprint.form}.to_json
        end

        # Update blueprint form, i.e. form.json
        put '/blueprints/@:identifier/form' do
          {result: @blueprint.form.save(deep_to_h(params[:form]))}.to_json
        end

        # LICENSE

        # Show blueprint license.
        get '/blueprints/@:identifier/license' do
          {result: @blueprint.license.to_s}.to_json
        end

        # Update blueprint license.
        put '/blueprints/@:identifier/license' do
          {result: @blueprint.license.save(params[:license])}.to_json
        end

        # README

        # Show blueprint readme.
        get '/blueprints/@:identifier/readme' do
          {result: @blueprint.readme.to_s}.to_json
        end

        # Update blueprint readme.
        put '/blueprints/@:identifier/readme' do
          {result: @blueprint.readme.save(params[:readme])}.to_json
        end

        # ICON

        # Show icon metadata.
        get '/blueprints/@:identifier/icon' do
          {result: @blueprint.icon.to_json}
        end

        # Send raw icon.
        get '/blueprints/@:identifier/icon/raw' do
          return unless @blueprint.icon.exist?
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
          {result: @blueprint.icon.save(params[:icon][:tempfile])}.to_json
        end

        # Delete icon
        delete '/blueprints/@:identifier/icon' do
          {result: @blueprint.icon.delete}.to_json
        end

        # FILES

        # List files.
        get '/blueprints/@:identifier/files' do
          {result: @blueprint.files.list}.to_json
        end

        # Create file.
        post '/blueprints/@:identifier/files' do
          {result: @blueprint.files.create(params[:filepath])}.to_json
        end

        # Show file.
        get '/blueprints/@:identifier/files/@*' do
          {result: @blueprint.files.find(params[:splat][0]).to_s}.to_json
        end

        # Update file.
        put '/blueprints/@:identifier/files/@*' do
          {result: @blueprint.files.find(params[:splat][0]).save(params[:file])}.to_json
        end

        # Delete file.
        delete '/blueprints/@:identifier/files/@*' do
          {result: @blueprint.files.find(params[:splat][0]).delete}.to_json
        end
      end
    end
  end
end
