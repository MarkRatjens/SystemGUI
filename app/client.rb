module App
  class Client < Sinatra::Base

    set sessions: true,
        session_secret: Sinatra::Base.development? ? '0' : ENV['SESSION_SECRET'],
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?

    get '/app.js' do
      content_type :javascript
      App.concatenate_files('app/client/**/*.js')
    end

    get '*' do
      content_type :html
      erb :'index.html'
    end

  end
end
