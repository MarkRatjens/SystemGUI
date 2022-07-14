module App
  class Api
    module Routes
      extend Sinatra::Extension

      require_relative 'routes/apps'
      require_relative 'routes/arenas'
      require_relative 'routes/blueprints'
      require_relative 'routes/capsules'
      require_relative 'routes/docker'
      require_relative 'routes/domains'
      require_relative 'routes/images'
      require_relative 'routes/catalogs'
      require_relative 'routes/locations'
      require_relative 'routes/packs'
      require_relative 'routes/providing'
      require_relative 'routes/provisioning'
      require_relative 'routes/publications'
      require_relative 'routes/resolutions'
      require_relative 'routes/session'
      require_relative 'routes/settings'
      require_relative 'routes/streaming'
      require_relative 'routes/user_keys'

      register Apps
      register Arenas
      register Blueprints
      register Capsules
      register Docker
      register Domains
      register Images
      register Catalogs
      register Locations
      register Packs
      register Providing
      register Provisioning
      register Publications
      register Resolutions
      register Session
      register Settings
      register Streaming
      register UserKeys

      get('/:space') { action(action: :index) }
      post('/:space') { action(action: :create) }
      get('/:space/@:identifier') { action(action: :show) }
      put('/:space/@:identifier') { action(action: :update) }
      delete('/:space/@:identifier') { action(action: :delete) }

      get('/:space/:action') { action }
      post('/:space/:action') { action }
      get('/:space/@:identifier/:action') { action }
      post('/:space/@:identifier/:action') { action }
    end
  end
end
