module App
  class Api
    module Models
      class Arena

        require_relative 'arena/installations'

        def initialize(identifier)
          @identifier = identifier
        end

        attr_reader :identifier

        def self.list
          Api.spaces.run do
            ::Spaces::Commands::Querying.new(method: :identifiers, space: :arenas)
          end.sort_by(&:downcase)
        end

        def self.index
          list.map do |identifier|
            Arena.new(identifier)
          end
        end

        def self.create(arena)
          new(arena[:identifier]).save(arena)
        end

        def to_json(*args)
          to_h.to_json
        end

        def to_h
          model.to_h.tap do |model|
            model[:installations] = installations
          end
        end

        def model
          Api.spaces.run do
            ::Spaces::Commands::Reading.new(identifier: @identifier, space: :arenas)
          end
        end


        def installations
          @installations ||= Installations.new(self)
        end

        def save(arena={})
          Api.spaces.run do
            ::Arenas::Commands::Saving.new(
              identifier: @identifier,
              model: arena,
            )
          end.tap do
            installations.generate
          end
        end

        def delete
          Api.spaces.run do
            ::Spaces::Commands::Deleting.new(identifier: @identifier, space: :arenas)
          end
        end

        # def export
        #   run do
        #     ::Blueprinting::Commands::Synchronizing.new(identifier: params[:identifier])
        #   end
        #   .to_json
        #
        # end





      end
    end
  end
end
