module App
  class Client < Base

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
