module App
  class Api
    module Models
      class Docker
        class Image
          def self.index
            ::Docker::Image.all.map do |image|
              find(image.id).state
            end.reverse
          end

          def self.find(id_or_identifier)
            Image.new(::Docker::Image.get(id_or_identifier))
          end

          def self.decendants_of(image_id)
            ::Docker::Image.all.map do |indexed_image|
              indexed_image_id = indexed_image.id
              next nil if indexed_image_id == image_id
              image = find(indexed_image_id)
              next image.identifier if image.layers.include?(image_id)
              nil
            end.compact.reverse
          end

          def initialize(image)
            @image = image
          end

          def show
            info
          end

          def id
            @image.id
          end

          def identifier
            id[7..18]
          end

          def create_container
            ::Docker::Container.create(Image: id).id[0..11]
          end

          def delete
            raise Error.new("Failed to delete image because it is being used by container#{containers.length == 1 ? '' : 's'} #{containers.join(', ')}.") if containers.any?
            raise Error.new("Failed to delete image because it has descendant#{decendants.length == 1 ? '' : 's'} #{decendants.join(', ')}.") if decendants.any?
            @image.delete(force: true)
          end

          def history
            @image.history
          end

          def layers
            @image.history.map do |image|
              next nil if image['Id'] == '<missing>'
              image['Id']
            end.compact
          end

          def info
            @info ||= @image.info
          end

          def tags
            info['RepoTags']
          end

          def size
            info['Size']
          end

          def created
            Time.parse(info['Created']).to_i
          end

          def state
            {
              identifier: identifier,
              tags: tags,
              size: size,
              created: created,
            }
          end

          def containers
            @containers ||= Container.use_image(id)
          end

          def decendants
            @decendants ||= Image.decendants_of(id)
          end
        end
      end
    end
  end
end
