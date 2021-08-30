module App
  class Api
    module Routes
      module Resolutions
        extend Sinatra::Extension

        before '/resolutions/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :resolutions)
        end
      end
    end
  end
end
