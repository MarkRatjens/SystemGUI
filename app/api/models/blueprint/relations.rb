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
                decendents: decendents,
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

          def decendents
            @decendents ||= blueprint_decendents_for(@identifier)
          end

          def embeds
            @embeds ||= blueprint_decendents_for(@identifier, 'embed')
          end

          def utilized?
            arena_bindings.any? || arena_conscriptions.any?
          end

          def bindings
            blueprint_bindings_for(@identifier).values
          end

          # Show all bindings that are embedded in a blueprint.
          def blueprint_bindings_for(blueprint_identifier, result={})
            collect_bindings_for(Api.spaces.run do
              ::Spaces::Commands::Reading.new(identifier: blueprint_identifier, space: :blueprints)
            end, result)
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
            Api.spaces.run do
              ::Spaces::Commands::Querying.new(method: :identifiers, space: :blueprints)
            end.map do |blueprint_identifier|
              Api.spaces.run do
                ::Spaces::Commands::Reading.new(identifier:blueprint_identifier, space: :blueprints)
              end
            end.select do |blueprint|
              blueprint.bindings.map do |binding|
                binding.target_identifier
              end.include? @identifier
            end.map do |blueprint|
              blueprint.identifier
            end.sort_by(&:downcase)
          end

          def arena_bindings
            @arena_bindings ||= Api.spaces.run do
              ::Spaces::Commands::Querying.new(method: :identifiers, space: :arenas)
            end.map do |arena_identifier|
              Api.spaces.run do
                ::Spaces::Commands::Reading.new(identifier:arena_identifier, space: :arenas)
              end
            end.select do |arena|
              arena.bindings.map do |binding|
                binding.target_identifier
              end.include? @identifier
            end.map do |arena|
              arena.identifier
            end.sort_by(&:downcase)
          end

          def arena_conscriptions
            Api.spaces.run do
              ::Spaces::Commands::Querying.new(method: :identifiers, space: :arenas)
            end.select do |arena_identifier|
              !arena_bindings.include?(arena_identifier) &&
              arena_decendents_for(arena_identifier).include?(@identifier)
            end.sort_by(&:downcase)
          end

          # List all blueprints that are decendents of a blueprint.
          def blueprint_decendents_for(blueprint_identifier, type=nil, ancestors=[])
            collect_decendents_for(Api.spaces.run do
              ::Spaces::Commands::Reading.new(identifier: blueprint_identifier, space: :blueprints)
            end, type, ancestors)
          end

          def collect_decendents_for(parent, type=nil, ancestors=[])
            parent.bindings.to_h.filter do |binding|
              !type || binding[:type] == type
            end.map do |binding|
              binding[:target_identifier]
            end.map do |target_identifier|
              if ancestors.include?(target_identifier)
                ["#{(ancestors + [parent.identifier, target_identifier]).join(' > ')} circular reference!"]
              else
                [target_identifier] + blueprint_decendents_for(target_identifier, type, ancestors + [parent.identifier])
              end
            end.flatten.compact.uniq
          end

          # List all blueprints that are decendents in an arena.
          def arena_decendents_for(arena_identifier)
            collect_decendents_for(Api.spaces.run do
              ::Spaces::Commands::Reading.new(identifier: arena_identifier, space: :arenas)
            end)
          end
        end
      end
    end
  end
end
