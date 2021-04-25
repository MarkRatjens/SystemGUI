module App
  class Api
    module Routes
      extend Sinatra::Extension

      require_relative 'routes/arenas'
      require_relative 'routes/blueprints'
      require_relative 'routes/packing'
      require_relative 'routes/provisioning'
      require_relative 'routes/publications'
      require_relative 'routes/resolutions'
      require_relative 'routes/system'

      register Arenas
      register Blueprints
      register Packing
      register Provisioning
      register Publications
      register Resolutions
      register System
    end
  end
end
