module App
  class Api
    module Models
      class Blueprint
        class Specification

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
            Api.spaces.run do
              ::Spaces::Commands::Reading.new(
                identifier: @blueprint.identifier,
                space: :blueprints
              )
            end
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
