module App
  class Api
    module Models
      class Blueprint
        class Relations

          def initialize(blueprint)
            @blueprint = blueprint
            @identifier = @blueprint.identifier
          end

          def to_json(*args)
            to_h.to_json
          end

          def to_h
            {
              blueprints: {
                descendants: descendants,
                embeds: embeds,
                parents: parents,
                bindings: bindings,
              },
              arenas: {
                bindings: arena_bindings,
                conscriptions: arena_conscriptions,
              },
            }
          end

          def descendants
            @descendants ||= blueprint_descendants_for(@identifier)
          end

          def embeds
            @embeds ||= blueprint_descendants_for(@identifier, 'embed')
          end

          def utilized?
            arena_bindings.any? || arena_conscriptions.any?
          end

          def bindings
            blueprint_bindings_for(@identifier).values
          end

          # Show all bindings that are embedded in a blueprint.
          def blueprint_bindings_for(blueprint_identifier, result={})
            collect_bindings_for(Api.spaces.universe.blueprints.by(blueprint_identifier), result)
          end

          def collect_bindings_for(parent, result)
            parent.bindings.map do |binding|
              result[binding.identifier] = binding
              if binding.type == 'embed'
                blueprint_bindings_for(binding.target_identifier, result)
              end
            end
            result
          end

          def parents
            @parents ||= Api.spaces.universe.blueprints.identifiers.map do |blueprint_identifier|
              Api.spaces.universe.blueprints.by(blueprint_identifier)
            end.select do |blueprint|
              blueprint.bindings.map do |binding|
                binding.target_identifier
              end.include? @identifier
            end.map do |blueprint|
              blueprint.identifier
            end.sort_by(&:downcase)
          end

          def arena_bindings
            @arena_bindings ||= Api.spaces.universe.arenas.identifiers.map do |arena_identifier|
              Api.spaces.universe.arenas.by(arena_identifier)
            end.select do |arena|
              arena.bindings.map do |binding|
                binding.target_identifier
              end.include? @identifier
            end.map do |arena|
              arena.identifier
            end.sort_by(&:downcase)
          end

          def arena_conscriptions
            @arena_conscriptions ||= Api.spaces.universe.arenas.identifiers.select do |arena_identifier|
              !arena_bindings.include?(arena_identifier) &&
              arena_descendants_for(arena_identifier).include?(@identifier)
            end.sort_by(&:downcase)
          end

          # List all blueprints that are descendants of a blueprint.
          def blueprint_descendants_for(blueprint_identifier, type=nil, ancestors=[])
            collect_descendants_for(Api.spaces.universe.blueprints.by(blueprint_identifier), type, ancestors)
          end

          def collect_descendants_for(parent, type=nil, ancestors=[])
            parent.bindings.to_h.filter do |binding|
              !type || binding[:type] == type
            end.map do |binding|
              binding[:target_identifier]
            end.map do |target_identifier|
              if ancestors.include?(target_identifier)
                ["#{(ancestors + [parent.identifier, target_identifier]).join(' > ')} circular reference!"]
              else
                [target_identifier] + blueprint_descendants_for(target_identifier, type, ancestors + [parent.identifier])
              end
            end.flatten.compact.uniq
          end

          # List all blueprints that are descendants in an arena.
          def arena_descendants_for(arena_identifier)
            collect_descendants_for(Api.spaces.universe.arenas.by(arena_identifier))
          end

        end
      end
    end
  end
end
