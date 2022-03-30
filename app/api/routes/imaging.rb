module App
  class Api
    module Routes
      module Packs
        extend Sinatra::Extension

        before '/imaging/?*' do
          @controller = ::Imaging::Controllers::Controller.new
        end

        post '/imaging/@:identifier/build' do
          params[:threaded] = true
          action(action: :build)
        end

      end
    end
  end
end
