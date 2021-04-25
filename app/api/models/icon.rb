module App
  class Api
    module Models
      class Icon
        LetterAvatar.setup do |config|
          config.colors_palette = :iwanthue
          config.pointsize = 400
          config.cache_base_path = universe.workspace.join('DefaultIconsCache')
        end

        def initialize(identifier)
          @identifier = identifier
        end

        attr_reader :identifier

        def path
          generate_thumbnail unless thumbnail_pathname.exist?
          thumbnail_pathname
        end

        def bordered_path
          generate_bordered unless bordered_pathname.exist?
          bordered_pathname
        end

        def update(file)
          image = MiniMagick::Image.read(file)
          image.format 'png'
          image.write(pathname)
          convert_raw_to_thumbnail
          convert_thumbnail_to_bordered
        end

        def delete
          thumbnail_pathname.rm
          pathname.rm
        end

        private

        def pathname
          universe.blueprints.path.join(identifier, 'icon.png')
        end

        def thumbnail_pathname
          universe.blueprints.path.join(identifier, 'icon-thumbnail.png')
        end

        def bordered_pathname
          universe.blueprints.path.join(identifier, 'icon-bordered.png')
        end

        def generate_thumbnail
          if pathname.exist?
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
          image = MiniMagick::Image.open(pathname)
          image.format 'png'
          image.combine_options do |options|
            options.thumbnail '48x48>'
            options.gravity 'center'
            options.extent '48x48'
            options.background 'white'
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
          letter_icon_path = LetterAvatar.generate(identifier, 48)
          FileUtils.mv(letter_icon_path, thumbnail_pathname)
        end
      end

    end
  end
end
