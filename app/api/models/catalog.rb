module App
  class Api
    module Models
      class Catalog
        def self.index
          directory.glob('*').map do |path|
            new(path.basename('.yaml')).summary
          end
        end

        def self.directory
          Api.spaces.directory.join('catalogs').tap do |path|
            FileUtils.mkdir_p(path)
          end
        end

        def initialize(identifier)
          @identifier = identifier
        end

        def summary
          {
            identifier: @identifier,
            about: data['about'],
          }
        end

        def pathname
          self.class.directory.join("#{@identifier}.yaml")
        end

        def data
          YAML.load_file(pathname)
        end

        def show
          {
            identifier: @identifier
          }.merge(data)
        end


              #
              # def catalogs_index
              #   directory.glob('*').map do |path|
              #     YAML.load_file(library_filepath)
              #   end
              # end
              #
              # # TODO: move apps to spaces
              # def apps_dirpath
              #   Api.spaces.directory.join('apps').tap do |path|
              #     FileUtils.mkdir_p(path)
              #   end
              # end
              #
              # def apps_in(path)
              #   entries = apps_dirpath.glob("#{path}/**").map do |entry|
              #     {
              #       name: entry.basename,
              #       path: entry.relative_path_from(apps_dirpath),
              #     }.merge(
              #       entry.directory? ? {directory: entry.directory?} : {}
              #     )
              #   end
              # end

        # def self.show
        #   info
        # end
        #
        # def self.url
        #   ::Catalog.url
        # end
        #
        # def self.version
        #   v = ::Catalog.version
        #   "#{v['Platform']['Name']} v#{v['Version']}"
        # end
        #
        # def self.name
        #   info['Name']
        # end
        #
        # def self.info
        #   ::Catalog.info
        # end
        #
        # def self.events
        #   ::Catalog::Event.stream { |event| yield(event) }
        # end
      end
    end
  end
end
