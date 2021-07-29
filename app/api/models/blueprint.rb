module App
  class Api
    module Models
      class Blueprint

        require_relative 'blueprint/blueprint_files'
        require_relative 'blueprint/form'
        require_relative 'blueprint/icon'
        require_relative 'blueprint/installations'
        require_relative 'blueprint/license'
        require_relative 'blueprint/readme'
        require_relative 'blueprint/relations'
        require_relative 'blueprint/specification'

        def initialize(identifier)
          @identifier = identifier
        end

        attr_reader :identifier

        def to_json(*args)
          to_h.to_json
        end

        def to_h
          {
            identifier: @identifier,
            installations: installations,
            relations: relations,
          }
        end

        def specification
          @specification ||= Specification.new(self)
        end

        def icon
          @icon ||= Icon.new(self)
        end

        def license
          @license ||= License.new(self)
        end

        def readme
          @readme ||= Readme.new(self)
        end

        def relations
          @relations ||= Relations.new(self)
        end

        def installations
          @installations ||= Installations.new(self)
        end

        def form
          @form ||= Form.new(self)
        end

        def files
          @files ||= BlueprintFiles.new(self)
        end

        def pathname
          Api.spaces.universe.blueprints.path.join(@identifier)
        end
      end
    end
  end
end
