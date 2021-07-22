module App
  class Api
    module Models
      class Installation
        class Input #TODO: consider all this as routing - the other half of models/installation.rb

          def initialize(installation)
            @installation = installation
            @identifier = installation.identifier
          end

          def to_json(*args)
            to_h.to_json
          end

          def save(input)
            installation = @installation.to_h
            installation[:input] = input.to_h
            Api.spaces.run do
              ::Spaces::Commands::Saving.new(
                identifier: @identifier,
                model: installation,
                space: :installations,
              )
            end
          end
        end
      end
    end
  end
end
