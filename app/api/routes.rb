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

      get '/:resource' do; action(:index) ;end
      post '/:resource' do; action(:new) ;end

      get '/:resource/@:identifier' do; action(:show) ;end
      put '/:resource/@:identifier' do; action(:update) ;end
      delete '/:resource/@:identifier' do; action(:delete) ;end

      get '/:resource/:action' do; action(params[:action]); end
      get '/:resource/@:identifier/:action' do; action(params[:action]) ;end
      post '/:resource/@:identifier/:action' do; action(params[:action]) ;end
    end
  end
end
