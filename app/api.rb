module App
  class Api < Base

    require_relative 'api/settings'
    require_relative 'api/errors'
    require_relative 'api/models'
    require_relative 'api/sessions'
    require_relative 'api/routes'

    helpers Sinatra::Cookies
    helpers Sinatra::Streaming

    register Routes

  end
end
