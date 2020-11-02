module App
  class Api

    before do
      @current_user = Api::Models::User.new( settings, session )
      # @current_user.authenticate! unless noauth
      @engines = Api::Models::Engines.new(
                    settings.engines_api_url,
                    @current_user.api_token )
    end

    def noauth
      (request.path_info == '/session' && request.request_method == 'POST') ||
      (request.path_info == '/reconnected' && request.request_method == 'GET')
    end

  end
end
