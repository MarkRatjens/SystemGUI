module App
  class Api
    module Models
      class User
        class Keys

          def initialize(user)
            @user = user
          end

          def index
            store.map.with_index { |s, i| show(i) }
          end

          def show(identifier)
            c = store[identifier.to_i]
            {
              identifier: identifier.to_i,
              domain: c['domain'],
              username: c['username'],
              explanation: c['explanation'],
            }
          end

          def store
            @store ||= File.exists?(filepath) ? YAML.load_file(filepath) : []
          end

          def update(args)
            save { |s| s[args['identifier'].to_i].merge!(args['model']) }
          end

          def create(args)
            save { |s| s.push(args['model']) }
          end

          def delete(args)
            save { |s| s.delete_at(args['identifier'].to_i) }
          end

          def filepath
            Api.spaces.universe.workspace.join('keys.yaml')
          end

          def save
            File.write(filepath, store.tap { |s| yield s }.to_yaml)
          end
        end
      end
    end
  end
end
