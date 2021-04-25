module App
  class Api

    set sessions: true,
        session_secret: Sinatra::Base.development? ? '0' : ENV['SESSION_SECRET'],
        logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?,
        show_exceptions: false,
        session_timeout_seconds: ( ENV['SESSION_TIMEOUT_MINUTES'] || 15 ).to_f * 60,
        library_url: ENV['APPLICATION_LIBRARY_URL'] || 'https://library.engines.org/api/v0/apps'

  end
end
