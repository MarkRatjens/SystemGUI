module App
  class Api
    module Models
      class Blueprint

        require_relative 'blueprint/form'
        require_relative 'blueprint/icon'
        require_relative 'blueprint/installations'
        require_relative 'blueprint/license'
        require_relative 'blueprint/publication'
        require_relative 'blueprint/readme'
        require_relative 'blueprint/relations'
        require_relative 'blueprint/specification'

        def initialize(identifier)
          @identifier = identifier
        end

        attr_reader :identifier

        def self.list
          Api.spaces.universe.blueprints.identifiers.sort_by(&:downcase)
        end

        def self.index
          list.map do |identifier|
            new(identifier)
          end.map do |blueprint| #TODO: bundle as a command
            {
              identifier: blueprint.identifier,
              about: blueprint.specification.to_h[:about],
              publication: blueprint.publication,
              utilized: blueprint.relations.utilized?,
            }
          end
        end

        def self.import(location)
          location = location.to_h.transform_keys(&:to_sym).delete_if{|k, v| v.empty?} #TODO: compact
          Api.spaces.run do
            ::Spaces::Commands::Saving.new(
              model: location,
              space: :locations
            )
          end.tap do |identifier|
            Api.spaces.run do #TODO: bundle as a command
              ::Publishing::Commands::Importing.new(
                identifier: identifier,
                force: true
              )
            end
          end
        end

        def self.create(blueprint)
          new(blueprint[:identifier]).save(blueprint)
        end

        def save(blueprint)
          Api.spaces.run do
            ::Spaces::Commands::Saving.new(
              identifier: @identifier,
              model: blueprint,
              space: :blueprints
            )
          end
        end


        def reimport
          model = {
            identifier: @identifier,
            repository: publication.repository,
            branch: publication.branch,
          }.delete_if{|k, v| v.empty?}
          Api.spaces.run do #TODO: compact
            ::Publishing::Commands::Importing.new(model: model, force: true)
          end
        end

        def to_json(*args)
          to_h.to_json
        end

        def to_h
          {
            identifier: @identifier,
            publication: publication,
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

        def publication
          @publication ||= Publication.new(self)
        end

        def installations
          @installations ||= Installations.new(self)
        end

        def form
          @form ||= Form.new(self)
        end

        def delete
          Api.spaces.run do
            ::Spaces::Commands::Deleting.new(identifier: @identifier, space: :blueprints)
          end
        end

      end
    end
  end
end
