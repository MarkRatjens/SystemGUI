module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        before '/arenas/?*' do
          @controller = ::Arenas::Controllers::Controller.new
        end

        post '/arenas/@:identifier/bind' do
          @controller.bind(
            identifier: params[:identifier],
            blueprint_identifier: params[:target_identifier],
          )
        end

        post '/arenas/@:identifier/connect' do
          @controller.connect(
            identifier: params[:identifier],
            other_identifier: params[:target_identifier],
          )
        end
      end
    end
  end
end
