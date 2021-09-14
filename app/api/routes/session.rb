module App
  class Api
    module Routes
      module Session
        extend Sinatra::Extension

        get '/session' do
          {result: {username: @current_user.username}}.to_json
        end

        # No authentication on this route.
        post '/session' do
          {result: @current_user.login(session: session)}.to_json
        end

        delete '/session' do
          {result: @current_user.logout!}.to_json
        end

        # No authentication on this route.
        # The client uses it as a target for polling when in 'Disconnected' state.
        get '/reconnected' do
          {result: 'Connected'}.to_json
        end
        
      end
    end
  end
end
