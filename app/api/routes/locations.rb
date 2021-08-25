module App
  class Api
    module Routes
      module Locations
        extend Sinatra::Extension

        before '/locations/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :locations)
        end

        get '/locations/@:identifier' do
          action(:show, **params)
        end

        put '/locations/@:identifier' do
          # TODO: Use action(:update, **params)
          dirpath = "/tmp/spaces/Universe/locations/#{params[:identifier]}"
          FileUtils.mkpath(dirpath) unless Dir.exist?(dirpath)
          path = "#{dirpath}/descriptor.yaml"
          model = params[:model]
          struct = OpenStruct.new(model)
          File.write(path, struct.to_yaml)
          {result: ''}.to_json
        end
      end
    end
  end
end
