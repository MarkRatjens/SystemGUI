module App
  class Api
    module Routes
      module Keys
        extend Sinatra::Extension

        before '/keys/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :user_keys)
        end
      end
    end
  end
end
