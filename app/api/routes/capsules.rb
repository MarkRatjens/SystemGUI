module App
  class Api
    module Routes
      module Capsules
        extend Sinatra::Extension

        before '/capsules/?*' do
          @controller = ::Capsules::Controllers::Controller.new
        end

      end
    end
  end
end
