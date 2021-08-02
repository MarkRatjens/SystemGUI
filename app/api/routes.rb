module App
  class Api
    module Routes
      extend Sinatra::Extension

      require_relative 'routes/dashboard'

      require_relative 'routes/arenas'
      require_relative 'routes/blueprints'
      require_relative 'routes/installations'
      require_relative 'routes/resolutions'
      require_relative 'routes/system'

      register Arenas
      register Blueprints
      register Installations
      register Resolutions
      register System
    end
  end
end
