module App
  class Api
    module Routes
      module Blueprints
        extend Sinatra::Extension

        before '/blueprints/?*' do
          @controller = ::Blueprinting::Controllers::Controller.new
        end

        #-----------------------------------------------------------------------
        # TODO: everything below here is still to be cleaned up

        include Models

        before '/blueprints/@:identifier/?*' do
          @blueprint = Blueprint.new(params[:identifier])
        end

        # FORM

        # Show blueprint form, i.e. form.json
        get '/blueprints/@:identifier/form' do
          {result: @blueprint.form}.to_json
        end

        # Update blueprint form, i.e. form.json
        put '/blueprints/@:identifier/form' do
          {result: @blueprint.form.save(symbolize_keys(params[:form].to_h))}.to_json
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
