module App
  class Api
    module Models
      class Blueprint
        class Installations #TODO: consider all this as routing

          def initialize(blueprint)
            @blueprint = blueprint
            @identifier = blueprint.identifier
          end

          def to_json(*args)
            to_a.to_json
          end

          def to_a
            Api.spaces.universe.installations.identifiers(blueprint_identifier: @identifier)
          end

        end
      end
    end
  end
end
