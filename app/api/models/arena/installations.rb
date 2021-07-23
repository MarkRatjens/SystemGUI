module App
  class Api
    module Models
      class Arena
        class Installations #TODO: consider all this as routing

          def initialize(arena)
            @arena = arena
            @identifier = arena.identifier
          end

          def to_json(*args)
            to_a.to_json
          end

          def to_a
            Api.spaces.universe.installations.identifiers(arena_identifier: @identifier)
          end

          def generate
            Api.spaces.run do
              ::Arenas::Commands::Installing.new(identifier: @identifier)
            end
          end
        end
      end
    end
  end
end
