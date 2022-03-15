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

        get ('/docker/containers/@:container_id') {
          docker { @container.show }
        }

        get ('/docker/containers/@:container_id/stats') {
          docker { @container.stats }
        }

        get ('/docker/containers/@:container_id/top') {
          docker { @container.top }
        }

        delete ('/docker/containers/@:container_id') {
          docker { @container.delete }
        }

        get ('/docker/containers/@:container_id/instruct/:instruction') {
          instruction = params[:instruction]
          return 404 unless instruction.match(/^start|stop|pause|kill$/)
          docker_container_instruction(@container, instruction)
        }

        get ('/docker/images/@:image_id') {
          docker { @image.show }
        }

        get ('/docker/images/@:image_id/history') {
          docker { @image.history }
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
        get ('/docker/images/@:image_id/run') {
          docker { @image.run }
        }
      end
    end
  end
end
