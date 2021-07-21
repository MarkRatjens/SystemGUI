module App
  class Api
    module Models
      class Blueprint
        class Relations < ::Spaces::Model

          relation_accessor :blueprint
          attr_accessor :identifier

          delegate(
            specification: :blueprint,
            model: :specification,
            [:embed_bindings, :deep_bindings, :all_identifiers_up_in, :all_arenas, :direct_arenas, :indirect_arenas] => :model
          )

          def initialize(blueprint)
            self.blueprint = blueprint
            self.identifier = blueprint.identifier
          end

          def to_json(*args)
            to_h.to_json
          end

          def to_h
            {
              blueprints: {
                parents: parent_identifiers,
                descendants: descendant_identifiers,
                bindings: deep_bindings,
                embeds: embed_bindings
              },
              arenas: {
                bindings: arena_identifiers,
                conscriptions: arena_conscription_identifiers
              },
            }
          end

          def parent_identifiers
            @parent_identifiers ||= all_identifiers_up_in(Api.spaces.universe.blueprints.all).sort_by(&:downcase)
          end

          def descendant_identifiers
            @descendant_identifiers ||= deep_bindings.map(&:target_identifier).uniq
          end

          def arena_identifiers
            direct_arenas.map(&:identifier).sort_by(&:downcase)
          end

          def arena_conscription_identifiers
            indirect_arenas.map(&:identifier).sort_by(&:downcase)
          end

          def utilized?
            all_arenas.any?
          end

        end
      end
    end
  end
end
