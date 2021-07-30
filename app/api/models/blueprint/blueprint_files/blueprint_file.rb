module App
  class Api
    module Models
      class Blueprint
        class BlueprintFiles
          class BlueprintFile

            def initialize(blueprint_files, relative_filepath)
              @blueprint_files = blueprint_files
              @relative_filepath = relative_filepath
            end

            def to_s
              return unless pathname.exist?
              pathname.read
            end

            def save(file)
              pathname.write(file)
            end

            def delete
              pathname.delete if exist?
            end

            def exist?
              pathname.exist?
            end

            private

            def pathname
              @blueprint_files.blueprint.pathname.join(@relative_filepath)
            end
          end
        end
      end
    end
  end
end
