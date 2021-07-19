module App
  class Api
    module Models
      class Blueprint
        class Form

          def initialize(blueprint)
            @blueprint = blueprint
            @identifier = @blueprint.identifier
          end

          def to_json(*args)
            to_h.to_json
          end

          def to_h
            if pathname.exist?
              JSON.parse(pathname.read)
            else
              {}
            end
          end

          def save(form)
            pathname.write(form.to_json)
          end

          def delete
            pathname.delete if exist?
          end

          def exist?
            pathname.exist?
          end

          private

          def pathname
            Api.spaces.universe.blueprints.path.join(@identifier, 'form.json')
          end
        end
      end
    end
  end
end
