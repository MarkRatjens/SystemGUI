module App
  class Api
    module Models
      class Blueprint
        class Readme

          def initialize(blueprint)
            @blueprint = blueprint
          end

          def to_s
            return '' unless pathname.exist?
            pathname.read
          end

          def save(readme)
            pathname.write(readme)
          end

          def delete
            pathname.delete if exist?
          end

          def exist?
            pathname.exist?
          end

          private

          def pathname
            @blueprint.pathname.join('README.md')
          end
        end
      end
    end
  end
end
