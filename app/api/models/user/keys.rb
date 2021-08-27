module App
  class Api
    module Models
      class User
        class Keys

          def initialize(user)
            @user = user
          end

          def index
            store.keys.map { |key| summary(key) }
          end

          def list
            store.keys
          end

          def summary(identifier)
            key = store[identifier]
            {
              identifier: identifier,
            }.tap do |result|
              result[:explanation] = key['explanation'] if key['explanation']
            end
          end

          def show(identifier)
            key = store[identifier]
            {
              identifier: identifier,
              host: key['host'],
              user: key['user'],
            }.tap do |result|
              result[:explanation] = key['explanation'] if key['explanation']
            end
          end

          def identifier_for(model)
            return "#{model['user']}@#{model['host']}" if model['identifier'].blank?
            model['identifier']
          end

          def store
            @store ||= File.exists?(filepath) ? YAML.load_file(filepath) : {}
          end

          def update(args)
            if args['model']['token']
              update_token(args)
            else
              update_details(args)
            end
          end

          def update_token(args)
            identifier = args['identifier']
            store[identifier].merge!(args['model'])
            identifier
          end

          def update_details(args)
            identifier = args['identifier']
            identifier_for(args['model']).tap do |updatedIdentifier|
              save do |store|
                if identifier == updatedIdentifier
                  store[identifier].merge!(args['model'])
                else
                  raise "Key #{updatedIdentifier} already exists." if store[updatedIdentifier]
                  store[updatedIdentifier] = store[identifier].merge(args['model'])
                  store.delete(identifier)
                end
                store[updatedIdentifier].delete('explanation') if args['model']['explanation'].blank?
              end
            end
          end

          def create(args)
            identifier_for(args['model']).tap do |identifier|
              save do |store|
                raise "Key #{identifier} already exists." if store[identifier]
                store[identifier] = args['model']
              end
            end
          end

          def delete(args)
            save { |s| s.delete(args['identifier']) }
            ''
          end

          def filepath
            Api.spaces.universe.workspace.join('settings-keys.yaml')
          end

          def save
            File.write(filepath, store.tap { |s| yield s }.to_yaml)
          end
        end
      end
    end
  end
end
