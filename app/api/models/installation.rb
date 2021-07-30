module App
  class Api
    module Models
      class Installation #TODO: consider all this as routing - the other half of models/installation/input.rb

        require_relative 'installation/input'

        def initialize(identifier)
          @identifier = identifier
        end

        attr_reader :identifier

        def input
          @input ||= Input.new(self)
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
              identifier: @identifier,
              space: :installations
            )
          end.result
        end

        def delete
          Api.spaces.run do
            ::Spaces::Commands::Deleting.new(
              identifier: @identifier,
              space: :installations
            )
          end.result
        end

      end
    end
  end
end
