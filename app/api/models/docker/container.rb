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

          def instruct(instruction)
            @container.send(instruction)
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
