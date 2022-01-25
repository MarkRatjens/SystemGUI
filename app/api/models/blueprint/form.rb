module App
  class Api
    module Models
      class Blueprint
        class Form

          def initialize(blueprint)
            @blueprint = blueprint
          end

          def to_json(*args)
            to_h.to_json
          end

          def to_h
            return base unless pathname.exist?
            base.merge(JSON.parse(pathname.read))
          end

          def base
            {blueprint_identifier: @blueprint.identifier}
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
            @blueprint.pathname.join('form.json')
          end
        end
      end
    end
  end
end
