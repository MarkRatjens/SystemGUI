module App
  class Api
    set sessions: true,
        secure: true,
        session_secret: Sinatra::Base.development? ? 'SESSION_SECRET' : ENV['SESSION_SECRET'],
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?,
        show_exceptions: false,
        session_timeout_seconds: ( ENV['SESSION_TIMEOUT_MINUTES'] || 15 ).to_f * 60,
        library_url: ENV['APPLICATION_LIBRARY_URL'] || 'https://library.engines.org/api/v0/apps'

      set (:cookie_options) do {
        :same_site => "none",
        :secure => true
      }
      end

    # TODO: use Rack::Protection::AuthenticityToken
  end
end
