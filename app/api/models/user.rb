module App
  class Api
    module Models
      class User

        def self.users_table
          [
            {username: 'jack', password: '123'},
            {username: 'jill', password: '456'},
          ]
        end

        def self.authenticate(args)
          user = users_table.find { |u| u[:username] == args['username'] }
          raise Error::NotAuthenticated unless user && user[:password] == args['password']
          {
            username: user[:username],
            token: 'AN-AUTH-TOKEN-FROM-SOME-USERS-RESOURCE',
          }
        end

        def initialize( settings, session )
          @settings = settings
          @session = session
        end

        def authenticate!
          raise Error::NotAuthenticated unless token
          raise Error::Timeout unless within_timeout
          touch_file
          return self
        end

        def logout!
          File.delete( filepath ) if File.exist? filepath
          @session['username'] = ''
        end

        def login(args)
          authentication = self.class.authenticate(args)
          save_authentication authentication
          return self
        end

        def username
          @session['username']
        end

        def token
          File.read filepath
        rescue Errno::ENOENT
        end

        def save_authentication( authentication )
          # FileUtils.mkdir(dirpath) unless Dir.exists?(dirpath)
          # File.write filepath, authentication[:token]
          @session['username'] = authentication[:username]
        end

        def session_timeout_seconds
          @settings.session_timeout_seconds
        end

        def within_timeout
          last_activity_at = timestamp
          return false unless last_activity_at
          last_activity_at + session_timeout_seconds > Time.now
        end

        private

        def dirpath
          Api.spaces.directory.join('sessions')
        end

        def filepath
          dirpath.join(@session['session_id'])
        end

        def timestamp
          File.mtime filepath
        end

        def touch_file
          FileUtils.touch filepath
        end

      end
    end
  end
end
