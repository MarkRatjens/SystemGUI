module App
  class Api
    module Models
      class Blueprint

        require_relative 'blueprint/blueprint_files'
        require_relative 'blueprint/form'
        require_relative 'blueprint/icon'
        require_relative 'blueprint/license'
        require_relative 'blueprint/readme'

        def initialize(identifier)
          @identifier = identifier
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
