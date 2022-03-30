module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension

        before '/arenas/?*' do
          @controller = ::Arenas::Controllers::Controller.new
        end

        post '/arenas' do
          @controller.create(model: params[:model]).tap do |creation|
            identifier = creation.result
            @controller.resolve(identifier: identifier)
            @controller.pack(identifier: identifier)
            @controller.provision(identifier: identifier)
          end.to_json
        end

        # post '/arenas/@:identifier/bind' do
        #   @controller.bind(
        #     identifier: params[:identifier],
        #     blueprint_identifier: params[:target_identifier],
        #   ).tap do |creation|
        #     identifier = creation.result
        #     @controller.resolve(identifier: identifier)
        #     @controller.pack(identifier: identifier)
        #     @controller.provision(identifier: identifier)
        #   end.to_json
        # end

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
