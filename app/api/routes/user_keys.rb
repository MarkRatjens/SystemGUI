module App
  class Api
    module Routes
      module UserKeys
        extend Sinatra::Extension

        before '/user_keys/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :user_keys)
        end
        
      end
    end
  end
end
