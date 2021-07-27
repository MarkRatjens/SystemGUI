module App
  class Api
    module Models
      class Blueprint
        class BlueprintFiles

          require_relative 'blueprint_files/blueprint_file'

          def initialize(blueprint)
            @blueprint = blueprint
          end

          attr_reader :blueprint

          def list
            @blueprint.pathname.glob([
              'commissioning/**/*', 'packing/**/*', 'service_tasks/**/*'
              ]).select do |filepath|
                File.file?(filepath)
              end.map do |filepath|
                filepath.sub("#{@blueprint.pathname}/", '')
              end
          end

          def find(relative_filepath)
            BlueprintFile.new(self, relative_filepath)
          end

          def create(relative_filepath)
            @blueprint.pathname.join(relative_filepath).tap do |pathname|
              pathname.parent.mkpath
              FileUtils.touch(pathname)
            end.sub("#{@blueprint.pathname}/", '')
          end
        end
      end
    end
  end
end
