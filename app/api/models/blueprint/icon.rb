module App
  class Api
    module Models
      class Blueprint
        class Icon

          def initialize(blueprint)
            @blueprint = blueprint
            @identifier = @blueprint.identifier
          end

          # def to_json(*args)
          #   exist?.to_json
          # end

          def raw_path
            raw_pathname
          end

          def thumbnail_path
            generate_thumbnail unless thumbnail_pathname.exist?
            thumbnail_pathname
          end

          def bordered_path
            generate_bordered unless bordered_pathname.exist?
            bordered_pathname
          end

          def save(icon)
            image = MiniMagick::Image.read(icon)
            image.format 'png'
            image.write(raw_pathname)
            convert_raw_to_thumbnail
            convert_thumbnail_to_bordered
          end

          def delete
            bordered_pathname.delete if bordered_pathname.exist?
            thumbnail_pathname.delete if thumbnail_pathname.exist?
            raw_pathname.delete if exist?
          end

          def exist?
            raw_pathname.exist?
          end

          private

          def raw_pathname
            Api.spaces.universe.blueprints.path.join(@identifier, 'icon.png')
          end

          def thumbnail_pathname
            Api.spaces.universe.blueprints.path.join(@identifier, 'icon-thumbnail.png')
          end

          def bordered_pathname
            Api.spaces.universe.blueprints.path.join(@identifier, 'icon-bordered.png')
          end

          def generate_thumbnail
            if raw_pathname.exist?
              convert_raw_to_thumbnail
            else
              generate_default_thumbnail
            end
          end

          def generate_bordered
            generate_thumbnail unless thumbnail_pathname.exist?
            convert_thumbnail_to_bordered
          end

          def convert_raw_to_thumbnail
            image = MiniMagick::Image.open(raw_pathname)
            image.format 'png'
            image.combine_options do |options|
              options.thumbnail '48x48>'
              options.gravity 'center'
              options.extent '48x48'
              options.background 'transparent'
            end
            image.write(thumbnail_pathname)
          end

          def convert_thumbnail_to_bordered
            image = MiniMagick::Image.open(thumbnail_pathname)
            image.combine_options do |options|
              options.thumbnail '48x48>'
              options.gravity 'center'
              options.extent '50x50'
              options.background 'white'
              options.bordercolor '#999'
              options.border 2
            end
            image.write(bordered_pathname)
          end

          def generate_default_thumbnail
            letter_icon_path = LetterAvatar.generate(@identifier, 48)
            FileUtils.mv(letter_icon_path, thumbnail_pathname)
          end
        end
      end
    end
  end
end