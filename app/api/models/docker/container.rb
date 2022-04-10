module App
  class Api
    module Models
      class Docker
        class Container
          def self.index
            ::Docker::Container.all(all: true).map do |indexed_container|
              {
                identifier: indexed_container.id[0..11],
                name: indexed_container.info['Names'][0][1..-1],
                image_identifier: indexed_container.info['ImageID'][7..18],
                status: indexed_container.info['State'],
                created: indexed_container.info['Created'],
              }
            end.reverse
          end

          def self.find(id_or_identifier)
            Container.new(::Docker::Container.get(id_or_identifier))
          end

          def self.use_image(image_id)
            ::Docker::Container.all(all: true).map do |indexed_container|
              container = find(indexed_container.id)
              container.image_id == image_id ? container.identifier : nil
            end.compact.reverse
          end

          def initialize(container)
            @container = container
          end

          def id
            @container.id
          end

          def identifier
            id[0..11]
          end

          # Instructions START STOP PAUSE KILL
          # Containers can take a while to change state
          # Threaded so that UI gets immediate response,
          # which confirms that that instruction has been accepted.
          # Any changes in container state are then sent to the UI via events.
          def instruct(instruction)
            Thread.new do
              send(instruction)
            rescue ::Docker::Error::ConflictError,
              ::Docker::Error::NotFoundError => e
              logger.info JSON.parse(e.message)['message']
            rescue => e
              logger.warn e.full_message
            end
            "#{instruction} #{identifier}"
          end

          def toggle_start
            return @container.unpause if paused?
            return @container.restart if running?
            @container.start
          end

          def toggle_pause
            return @container.unpause if paused?
            @container.pause
          end

          def stop
            @container.stop
          end

          def kill
            @container.kill
          end

          def show
            inspect
          end

          def logs
            @container
            .streaming_logs(stdout: true, follow: true, tail: 1000) {
              |stream, chunk| yield(stream, chunk)
            }
          end

          def delete
            raise Error.new('Failed to delete container because it is running.') if running?
            @container.delete
          end

          def inspect
            @inspect ||= @container.json
          end

          def stats
            @container.stats
          end

          def top
            raise Error.new('Failed to top container because it is not running.') if !running?
            @container.top(format: :hash)
          end

          def image_id
            inspect['Image']
          end

          def image_identifier
            image_id[7..18]
          end

          def paused?
            inspect['State']['Paused']
          end

          def running?
            inspect['State']['Running']
          end

          def status
            inspect['State']['Status']
          end

          def oom
            inspect['State']['OOMKilled']
          end

          def state
            {
              identifier: identifier,
              status: status,
              oom: oom,
            }
          end
        end
      end
    end
  end
end
