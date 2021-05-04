module App
  class Api < Sinatra::Base
    require_relative 'api/settings'
    require_relative 'api/mime'
    require_relative 'api/errors'
    require_relative 'api/models'
    require_relative 'api/sessions'
    require_relative 'api/routes'

    helpers Sinatra::Cookies
    helpers Sinatra::Streaming

    register Routes

    after do
      content_type 'application/json' unless content_type
    end

    def path
      request.fullpath.sub('/api', '')
    end

    # def query
    #   request.env['rack.request.query_hash'].transform_keys!(&:to_sym)
    # end

    def command
      returned = yield.run.to_h
      return returned[:result].to_json unless returned[:errors]
      return raise Error.new("Spaces returned errors: #{returned[:errors]}") if returned[:errors]
      raise Error.new('Spaces returned an object with no result and no errors.')
    end
  end
end
