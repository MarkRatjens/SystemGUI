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
      payload = yield.run.payload
      raise Error.new("Spaces returned errors: #{payload.errors}") if payload.errors
      if payload.result
        result = payload.result
        json = result.to_json
        # Note that .to_json sometimes returns a result like:
        #   "\"#<OpenStruct descriptor=#<OpenStruct identifier=\\\"node-red\\\">, blueprint={:exist=>false}>\""
        # Doing .to_h.to_json seems to be a work around.
        return result.to_h.to_json if json.start_with? "\"#<OpenStruct"
        return json
      end
      raise Error.new('Spaces returned an object with no result and no errors.')
    end
  end
end
