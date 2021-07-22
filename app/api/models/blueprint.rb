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

        def self.index #TODO: implement summary header commands
          list.map do |identifier|
            new(identifier)
          end.map do |blueprint| #TODO: bundle as a command
            {
              identifier: blueprint.identifier,
              about: blueprint.specification.to_h[:about],
              publication: blueprint.publication, #TODO: consider why couple this since it's optional
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
            ) #TODO: this is unnecessary because Publishing::Commands::Importing calls locations#ensure_located
          end.tap do |identifier|
            Api.spaces.run do
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

        def save(blueprint) #TODO: should be in the route
          Api.spaces.run do
            ::Spaces::Commands::Saving.new(
              identifier: @identifier,
              model: blueprint,
              space: :blueprints
            )
          end
        end


        def reimport #TODO: should be in the route
          model = { # Descriptor object?
            identifier: @identifier,
            repository: publication.repository,
            branch: publication.branch,
          }.delete_if{|k, v| v.empty?} #TODO: compact
          Api.spaces.run do
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

        def delete #TODO: should be in routing
          Api.spaces.run do
            ::Spaces::Commands::Deleting.new(identifier: @identifier, space: :blueprints)
          end
        end

      end
    end
  end
end
