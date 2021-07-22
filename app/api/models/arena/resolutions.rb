module App
  class Api
    module Models
      class Arena
        class Resolutions

          def initialize(arena)
            @arena = arena
            @identifier = arena.identifier
          end

          def to_json(*args)
            to_a.to_json
          end

          def to_a
            Api.spaces.run do
              ::Spaces::Commands::Querying.new(
                method: :identifiers,
                arena_identifier: @identifier,
                space: :resolutions
              )
            end
          end

          def generate
            Api.spaces.run do
              Arenas::Commands::Resolving.new(
                identifier: @identifier,
                force: true
              )
            end
          end
        end
      end
    end
  end
end
