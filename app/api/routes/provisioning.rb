module App
  class Api
    module Routes
      module Provisioning
        extend Sinatra::Extension

        before '/provisioning/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :provisioning)
        end
        
      end
    end
  end
end
