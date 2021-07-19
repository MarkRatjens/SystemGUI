require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'

require 'byebug' if Sinatra::Base.development?

module App
  require_relative 'app/error'
  require_relative 'app/helpers'
  require_relative 'app/api'
  require_relative 'app/client'
end
