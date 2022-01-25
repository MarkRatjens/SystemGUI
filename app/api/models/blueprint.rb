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

        attr_reader :identifier

        def spaces_objct
          Api.spaces.universe.blueprints.by(identifier)
        end

        def deep_connects
          spaces_objct.bindings.deep_connect_bindings.map(&:target_identifier).uniq.sort
        end

        def forms
          deep_connects.map do |target_identifier|
            Blueprint.new(target_identifier).form
          end
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
          Api.spaces.path.join('blueprints', @identifier)
        end
      end
    end
  end
end
