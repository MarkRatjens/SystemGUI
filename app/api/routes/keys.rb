module App
  class Api
    module Routes
      module Keys
        extend Sinatra::Extension

        get '/keys' do
          {result: @current_user.keys.index}.to_json
        end

        get '/keys/@:identifier' do
          {result: @current_user.keys.show(params[:identifier])}.to_json
        end

        post '/keys' do
          {result: @current_user.keys.create(**params)}.to_json
        rescue => e
          {errors: [e.message]}.to_json
        end

        put '/keys/@:identifier' do
          {result: @current_user.keys.update(**params)}.to_json
        rescue => e
          {errors: [e.message]}.to_json
        end

        delete '/keys/@:identifier' do
          {result: @current_user.keys.delete(**params)}.to_json
        end
      end
    end
  end
end
