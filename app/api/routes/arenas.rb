module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        before '/arenas/?*' do
          @controller = ::Arenas::Controllers::Controller.new
        end

        post '/arenas/@:identifier/bind' do
          result = @controller.bind(
            identifier: params[:identifier],
            blueprint_identifier: params[:target_identifier],
          ).tap do |result|
            @controller.resolve(identifier: params[:identifier])
            @controller.pack(identifier: params[:identifier])
            @controller.provision(identifier: params[:identifier])
          end.to_json
        end

        post '/arenas/@:identifier/connect' do
          @controller.connect(
            identifier: params[:identifier],
            other_identifier: params[:target_identifier],
          ).to_json
        end
      end
    end
  end
end
