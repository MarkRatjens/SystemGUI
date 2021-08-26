module App
  class Api
    module Routes
      extend Sinatra::Extension

      require_relative 'routes/dashboard'

      require_relative 'routes/arenas'
      require_relative 'routes/blueprints'
      require_relative 'routes/installations'
      require_relative 'routes/keys'
      require_relative 'routes/locations'
      require_relative 'routes/packs'
      require_relative 'routes/provisioning'
      require_relative 'routes/publications'
      require_relative 'routes/resolutions'
      require_relative 'routes/session'
      require_relative 'routes/system'

      register Arenas
      register Blueprints
      register Installations
      register Keys
      register Locations
      register Packs
      register Provisioning
      register Publications
      register Resolutions
      register Session
      register System
    end
  end
end
