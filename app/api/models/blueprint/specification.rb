module App
  class Api
    module Models
      class Blueprint
        class Specification #TODO: consider all this as routing - the other half of models/installation.rb

        #TODO: Consider renaming as it overrides Spaces convention then reclaims "Blueprint" for something else

          def initialize(blueprint)
            @blueprint = blueprint
          end

          def to_json(*args)
            to_h.to_json
          end

          def to_h
            model.to_h
          end

          def model
            @model ||= Api.spaces.universe.blueprints.by(@blueprint.identifier)
          end

          def save(specification)
            Api.spaces.run do
              ::Spaces::Commands::Saving.new(
                identifier: @blueprint.identifier,
                model: specification,
                space: :blueprints
              )
            end
          end

        end
      end
    end
  end
end
