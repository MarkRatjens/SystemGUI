module App
  class Api

    set sessions: true,
        session_secret: ENV['SESSION_SECRET'],
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?,
        engines_api_url: ENV['ENGINESD_API_URL'],
        session_timeout_seconds: ( ENV['SESSION_TIMEOUT_MINUTES'] || 15 ).to_f * 60,
        library_url: ENV['APPLICATION_LIBRARY_URL'] || 'https://library.engines.org/api/v0/apps'

  end
end
