module App
  class Api
    module Routes
      module Images
        extend Sinatra::Extension

        before '/images/?*' do
          @controller = ::Images::Controllers::Controller.new
        end

        post '/images/@:identifier/build' do
          params[:threaded] = true
          action(action: :build)
        end

      end
    end
  end
end
