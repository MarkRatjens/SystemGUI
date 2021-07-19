module App
  class Api
    module Models
      class Blueprint
        class Publication

          def initialize(blueprint)
            @blueprint = blueprint
            @identifier = blueprint.identifier
          end

          def to_json(*args)
            model.to_json
          end

          def model
            return false unless exist?
            {
              repository: repository,
              branch: branch,
              branches: branches,
            }
          end

          def repository
            @repository ||= `git -C #{path} remote get-url origin`.strip
          end

          def branch
            @branch ||= `git -C #{path} rev-parse --abbrev-ref HEAD`.strip
          end

          def path
            @path ||= Api.spaces.universe.publications.path.join(@identifier)
          end

          def create(publication)
            ## I tried to use importing command, but error:
            ## Spaces returned errors: {"Spaces::Errors::RepositoryFail"=>{:message=>"git '-c' 'color.ui=false' clone '--branch' 'main' '--' '' '/tmp/spaces/Universe/publications/wertfds' 2>&1:fatal: The empty string is not a valid path\n"}}
            # publication = publication.to_h.transform_keys(&:to_sym).delete_if{|k, v| v.empty?}
            # publication[:identifier] = @identifier
            # Api.spaces.run do
            #   ::Publishing::Commands::Importing.new(model: publication, force: false)
            # end
            url = publication[:url]
            branch = publication[:branch].blank? ? 'main' : publication[:branch]
            path.mkdir
            `git -C #{path} init`
            `git -C #{path} checkout -b #{branch}`
            `git -C #{path} remote add origin #{url}`
            `touch #{path}/README.md`
            `git -C #{path} add .`
            `git -C #{path} commit -m "first commit"`
          end

          def synchronize
            Api.spaces.run do
              # ::Blueprinting::Commands::Synchronizing.new(identifier: @identifier)
              ::Publishing::Commands::Synchronizing.new(identifier: @identifier)
            end.tap do
              `git -C #{path} add .`
            end
          end

          def diff
            synchronize
            `git -C #{path} diff HEAD`
          end

          def export(export)
            `git -C #{path} commit -m #{export[:message]}`
            `git -C #{path} push -f -u origin #{branch}`
            # Api.spaces.run do
            #   ::Publishing::Commands::Exporting.new(identifier: @identifier, message: export[:message])
            # end
          end

          def exist?
            @exist ||= Api.spaces.run do
              ::Spaces::Commands::Status.new(identifier: @identifier, space: :blueprints)
            end.publication[:exist]
          end

          def delete
            Api.spaces.run do
              ::Spaces::Commands::Deleting.new(identifier: @identifier, space: :publications)
            end
          end

          def branches
            `git -C #{path} branch`.split("\n").map{|b| b[2..-1]}
          end

          def checkout(branch)
            `git -C #{path} checkout -b #{branch}`
          end
        end
      end
    end
  end
end
