module App
  class Api
    module Routes
      module Apps
        extend Sinatra::Extension

        # TODO: move to spaces
        get '/apps/?' do
          {result: apps_in(params[:path] || '.')}.to_json
        end

        # TODO: move to spaces
        post '/apps' do
          File.write(apps_filepath, params[:model].to_yaml)
          {result: nil}.to_json
        end
      end
    end
  end
end
