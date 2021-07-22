module App
  class Api
    module Models
      class Blueprint
        class License #TODO: consider all this as routing

          def initialize(blueprint)
            @blueprint = blueprint
            @identifier = @blueprint.identifier
          end

          def to_s
            if pathname.exist?
              pathname.read
            else
              ''
            end
          end

          def save(license)
            pathname.write(license)
          end

          def delete
            pathname.delete if exist?
          end

          def exist?
            pathname.exist?
          end

          private

          def pathname
            Api.spaces.universe.blueprints.path.join(@identifier, 'LICENSE.md')
          end
        end
      end
    end
  end
end
