module App #TODO: consider whether this level is necessary
  class Api #TODO: consider whether this level is necessary or descriptive
    module Models #TODO: consider renaming to ViewModel
      class Arena

        require_relative 'arena/installations'
        require_relative 'arena/resolutions'
        require_relative 'arena/packs'

        def initialize(identifier)
          @identifier = identifier
        end

        attr_reader :identifier

        def self.list
          Api.spaces.universe.arenas.identifiers.sort_by(&:downcase)
        end

        #TODO: reconsider this pattern of implementing controller/routing methods as class methods
        # what architecture framework is it derived from?

        def self.index
          list.map do |identifier|
            Arena.new(identifier)
          end
        end

        def self.create(arena)
          new(arena[:identifier]).save(arena)
        end

        def to_json(*args) #TODO: refactor ... there are 9 other (uncommented-out) duplications
          to_h.to_json
        end

        def to_h
          model.to_h
          # .tap do |model|
          #   model[:installations] = installations #TODO: consider why couple this
          #   model[:resolutions] = resolutions #TODO: consider why couple this
          #   model[:packs] = packs #TODO: consider why couple this
          # end
        end

        def model
          Api.spaces.universe.arenas.by(@identifier) #TODO: fix violations of Uniform Reference Principle
        end

        def installations #TODO: consider the duplicate coupling in Blueprint
          @installations ||= Installations.new(self)
        end

        def resolutions
          @resolutions ||= Resolutions.new(self)
        end

        def packs
          @packs ||= Packs.new(self)
        end

        def save(arena)
          Api.spaces.run do
            ::Arenas::Commands::Saving.new(
              identifier: @identifier,
              model: arena,
            )
          end.tap do
            installations.generate #TODO: Consider why. Seems like unnecessary coupling
          end
        end

        def apply
          Api.spaces.run do
            ::Spaces::Commands::Executing.new(
              identifier: params[:identifier],
              space: :arenas,
              execute: :apply
            )
          end.to_json
        end

        def delete #TODO: should be in the route ... or a "Controller"
          Api.spaces.run do
            ::Spaces::Commands::Deleting.new(
              identifier: @identifier,
              space: :arenas
            )
          end
        end
      end
    end
  end
end
