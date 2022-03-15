module App
  class Api
    module Helpers
      include App::Api::Models

      def docker_stream_container_log(container_id)
        stream_from do |out|
          Docker::Container.find(container_id).logs do |stream, chunk|
            send_output(out, {output: chunk}.to_json)
          rescue => e
            streaming_rescue(out, e)
            break
          end
        rescue => e
          docker_stream_rescue(out, e)
        end
      end

      def docker_stream_events
        stream_from do |out|
          docker_index_events(out)
          Docker.events do |event|
            docker_event(out, event)
          rescue => e
            streaming_rescue(out, e)
            break
          end
        rescue => e
          docker_stream_rescue(out, e)
        end
      end

      def docker_index_events(out)
        send_docker_event(out, :containers, 'index', Docker::Container.index)
        send_docker_event(out, :images, 'index', Docker::Image.index)
      end

      def docker_event(out, event)
        if event.type == 'container'
          docker_container_event(out, event)
        elsif event.type == 'image'
          docker_image_event(out, event)
        end
      end

      def docker_container_event(out, event)
        if (event.action == 'destroy' || event.action == 'create')
          type = :containers
          action = 'index'
          payload = Docker::Container.index
        else
          type = :container
          action = event.action
          payload = Docker::Container.find(event.actor.id).state
        end
        send_docker_event(out, type, action, payload)
      end

      def docker_image_event(out, event)
        if (event.action == 'delete')
          # Docker sends a delete event at start of delete process.
          # Cleanup may not be finished when images are indexed here,
          # in which case index fails with NotFoundError.
          # Retry index until it is successful.
          index = nil
          while !index do
            begin
              index = Docker::Image.index
            rescue ::Docker::Error::NotFoundError
              sleep 1
            end
          end
          send_docker_event(out, :images, 'index', index)
        elsif (event.action == 'pull' || event.action == 'tag')
          send_docker_event(out, :images, 'index', Docker::Image.index)
        end
      end

      def docker_stream_rescue(out, e)
        if e.is_a? ::Docker::Error::TimeoutError
          send_timeout(out)
        else
          send_exception(out, e)
        end
        send_eot(out)
      end

      def send_docker_event(out, type, action, payload)
        send_output(out, {
          type: type,
          action: action,
          payload: payload,
        }.to_json)
      end
    end
  end
end
