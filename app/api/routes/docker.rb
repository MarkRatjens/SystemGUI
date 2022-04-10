module App
  class Api
    module Routes
      module Arenas
        extend Sinatra::Extension
        include Models

        before '/docker/containers/@:container_id/?*' do
          @container = Docker::Container.find(params[:container_id])
        end

        before '/docker/images/@:image_id/?*' do
          @image = Docker::Image.find(params[:image_id])
        end

        # container log
        get ('/docker/containers/@:container_id/log') {
          content_type("text/event-stream")
          docker_stream_container_log(params[:container_id])
        }

        # UI events that are derived from the Docker event stream
        get ('/docker/events') {
          content_type("text/event-stream")
          docker_stream_events()
        }

        get ('/docker/summary') {
          docker { Docker.summary }
        }

        get ('/docker') {
          docker { Docker.show }
        }

        post '/docker/prebuild' do
          @controller = ::Arenas::Controllers::Controller.new
          blueprint_identifier = params[:blueprint_identifier]
          identifier = "$#{params[:identifier].blank? ? blueprint_identifier : params[:identifier]}"
          @controller.create(model: {identifier: identifier}).tap do
            @controller.provide(identifier: identifier, role_identifier: :runtime, provider_identifier: "docker_local")
            @controller.provide(identifier: identifier, role_identifier: :packing, provider_identifier: "docker_local")
            @controller.bind(identifier: identifier, blueprint_identifier: blueprint_identifier)
            @controller.resolve(identifier: identifier)
            @controller.pack(identifier: identifier)
          end.to_json
        end

        post '/docker/composition' do
          @controller = ::Arenas::Controllers::Controller.new
          blueprint_identifier = params[:blueprint_identifier]
          identifier = params[:identifier].blank? ? blueprint_identifier : params[:identifier]
          @controller.create(model: {identifier: identifier}).tap do
            @controller.provide(identifier: identifier, role_identifier: :runtime, provider_identifier: "docker_local")
            @controller.provide(identifier: identifier, role_identifier: :packing, provider_identifier: "docker_local")
            @controller.provide(identifier: identifier, role_identifier: :orchestration, provider_identifier: "docker_compose_local")
            connectables = @controller.connectables(identifier: identifier).result
            connectables.each do |connectable|
              unless connectable.identifier[0] == '$'
                @controller.connect(identifier: identifier, other_identifier: connectable.identifier)
              end
            end
            @controller.stage(identifier: identifier, blueprint_identifier: blueprint_identifier)
            # @controller.resolve(identifier: identifier)
            # @controller.pack(identifier: identifier)
            # @controller.orchestrate(identifier: identifier)
          end.to_json
        end

        get ('/docker/containers/@:container_id') {
          docker { @container.show }
        }

        get ('/docker/containers/@:container_id/execute') {
          docker { @container.send(params[:execute]) }
        }

        delete ('/docker/containers/@:container_id') {
          docker { @container.delete }
        }

        get ('/docker/containers/@:container_id/instruct/:instruction') {
          docker { @container.instruct(params[:instruction]) }
        }

        get ('/docker/images/@:image_id') {
          docker { @image.show }
        }

        get ('/docker/images/@:image_id/execute') {
          docker { @image.send(params[:execute]) }
        }

        delete ('/docker/images/@:image_id') {
          docker { @image.delete }
        }

        # TODO: Decide if prune is needed.
        # get ('/docker/images/prune') {
        #   docker { Docker::Image.prune }
        # }

        # run an image
        # TODO: this route needs attention.
        # Are additional params needed, such as :container_name, or :tag?
        # Maybe change to POST /docker/containers
        post ('/docker/images/@:image_id/create_container') {
          docker { @image.create_container }
        }
      end
    end
  end
end
