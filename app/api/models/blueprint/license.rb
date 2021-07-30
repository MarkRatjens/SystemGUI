module App
  class Api
    module Models
      class Blueprint
        class License #TODO: consider all this as routing

          def initialize(blueprint)
            @blueprint = blueprint
          end

          def to_s
            return '' unless pathname.exist?
            pathname.read
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
            @blueprint.pathname.join('LICENSE.md')
          end
        end
      end
    end
  end
end
