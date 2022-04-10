module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        before '/publications/?*' do
          params[:threaded] = true
          @controller = ::Publishing::Controllers::Controller.new
        end

        get '/publications/identify' do
          model = params[:model]
          identifier = model[:identifier].empty? ?
          model[:repository].match(/(?:.+\/)([^#?\.]+)/)[1] :
          model[:identifier]
          {result: identifier}.to_json
        end
      end
    end
  end
end
