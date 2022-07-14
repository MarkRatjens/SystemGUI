module App
  class Api
    module Routes
      module Catalogs
        extend Sinatra::Extension
        include Models

        # TODO: move to spaces
        get '/catalogs' do
          {result: Catalog.index}.to_json
        end

        # get '/catalogs/@:identifier/summary' do
        #   {result: Catalog.new(params[:identifier]).summary}.to_json
        # end

        get '/catalogs/@:identifier' do
          {result: Catalog.new(params[:identifier]).show}.to_json
        end

        # TODO: move to spaces
        post '/catalogs' do
          File.write(catalogs_filepath, params[:model].to_yaml)
          {result: nil}.to_json
        end
      end
    end
  end
end
