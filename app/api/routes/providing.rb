module App
  class Api
    module Routes
      module Providing
        extend Sinatra::Extension

        before '/providers/?*' do
          @controller = ::Providing::Controllers::Controller.new
        end

        get '/providers' do
          @controller.index.to_json
        end
      end
    end
  end
end
