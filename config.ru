require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'
require 'byebug' if Sinatra::Base.development?

require './app'

map('/node_modules') { run Rack::Directory.new('node_modules') }
map('/api') { run App::Api }
map('/') { run App::Client }
