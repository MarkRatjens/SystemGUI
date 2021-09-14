module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        before '/publications/?*' do
          params[:threaded] = true
          @controller = ::Publishing::Controllers::Controller.new
        end

      end
    end
  end
end
