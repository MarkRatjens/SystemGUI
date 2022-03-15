module App
  class Api
    module Models
      class Docker
        require_relative 'docker/container'
        require_relative 'docker/image'

        class Error < StandardError; end

        def self.summary
          {
            name: name,
            version: version,
            url: url,
          }
        end

        def self.show
          info
        end

        def self.url
          ::Docker.url
        end

        def self.version
          v = ::Docker.version
          "#{v['Platform']['Name']} v#{v['Version']}"
        end

        def self.name
          info['Name']
        end

        def self.info
          ::Docker.info
        end

        def self.events
          ::Docker::Event.stream { |event| yield(event) }
        end
      end
    end
  end
end
