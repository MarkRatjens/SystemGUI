module App
  class Api
    module Routes
      module Capsules
        extend Sinatra::Extension

        before '/capsules/?*' do
          @controller = ::Capsules::Controllers::Controller.new
        end

        # post '/capsules/@:identifier/build' do
        #   params[:threaded] = true
        #   action(action: :build)
        # end

      end
    end
  end
end
