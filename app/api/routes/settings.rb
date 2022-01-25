module App
  class Api
    module Routes
      module Settings
        extend Sinatra::Extension

        # TODO: move to spaces
        get '/settings' do
          {result: YAML.load_file(settings_filepath)}.to_json
        end

        # TODO: move to spaces
        post '/settings' do
          File.write(settings_filepath, params[:model].to_yaml)
          {result: nil}.to_json
        end
      end
    end
  end
end
