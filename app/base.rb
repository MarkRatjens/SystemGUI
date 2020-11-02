module App
  class Base < Sinatra::Base

    set show_exceptions: false

    configure do
      mime_type :javascript, 'application/javascript'
      mime_type :json, 'application/json'
      mime_type :terminal, 'text/terminal'
    end

    not_found do
      content_type :text
      status 404
      "Server 404. Route not found: #{request.request_method} '#{request.path}'."
    end

  end
end
