module App
  class Api
    module Routes
      extend Sinatra::Extension

      require_relative 'routes/dashboard'

      require_relative 'routes/arenas'
      require_relative 'routes/blueprints'
      require_relative 'routes/installations'
      require_relative 'routes/user_keys'
      require_relative 'routes/locations'
      require_relative 'routes/packs'
      require_relative 'routes/provisioning'
      require_relative 'routes/publications'
      require_relative 'routes/resolutions'
      require_relative 'routes/session'
      require_relative 'routes/settings'

      register Arenas
      register Blueprints
      register Installations
      register UserKeys
      register Locations
      register Packs
      register Provisioning
      register Publications
      register Resolutions
      register Session
      register Settings

      get '/:space' do; action(:index) ;end
      post '/:space' do; action(:new) ;end

      get '/:space/@:identifier' do; action(:show) ;end
      put '/:space/@:identifier' do; action(:update) ;end
      delete '/:space/@:identifier' do; action(:delete) ;end

      get '/:space/:action' do; action(params[:action]); end
      post '/:space/:action' do; action(params[:action]); end
      get '/:space/@:identifier/:action' do; action(params[:action]) ;end
      post '/:space/@:identifier/:action' do; action(params[:action]) ;end
    end
  end
end
