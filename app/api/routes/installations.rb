module App
  class Api
    module Routes
      module Installations
        extend Sinatra::Extension

        before '/installations/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :installations)
        end

      end
    end
  end
end
