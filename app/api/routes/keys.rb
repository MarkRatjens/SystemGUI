module App
  class Api
    module Routes
      module Keys
        extend Sinatra::Extension

        before '/keys/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :user_keys)
        end

        get '/keys' do
          action(:index, **params)
        end

        get '/keys/list' do
          action(:list, **params)
        end

        post '/keys' do
          action(:new, **params)
        end

        get '/keys/@:identifier/summary' do
          action(:summary, **params)
        end

        get '/keys/@:identifier' do
          action(:show, **params)
        end

        delete '/keys/@:identifier' do
          action(:delete, **params)
        end

        put '/keys/@:identifier' do
          action(:update, **params)
        end

        # Routes below are to be deprecated.

        get '/settings/keys' do
          {result: @current_user.keys.index}.to_json
        end

        get '/settings/keys/@:identifier' do
          {result: @current_user.keys.show(params[:identifier])}.to_json
        end

        post '/settings/keys' do
          {result: @current_user.keys.create(**params)}.to_json
        rescue => e
          {errors: [e.message]}.to_json
        end

        put '/settings/keys/@:identifier' do
          {result: @current_user.keys.update(**params)}.to_json
        rescue => e
          {errors: [e.message]}.to_json
        end

        delete '/settings/keys/@:identifier' do
          {result: @current_user.keys.delete(**params)}.to_json
        end
      end
    end
  end
end
