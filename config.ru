require './app'

map('/node_modules') { run Rack::Directory.new('node_modules') }
map('/api') { run App::Api }
map('/') { run App::Client }
