require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'

# require 'fileutils'
require 'pathname'
# require 'logger'
require 'mini_magick'
require 'letter_avatar'
require 'fastimage'
require 'byebug' if Sinatra::Base.development?
#
# $:.unshift(Pathname.new(__FILE__).parent.join('lib').expand_path)

require 'spaces'

def universe
  @universe ||= Universe.new
end

module App
  require_relative 'app/error'
  require_relative 'app/helpers'
  require_relative 'app/api'
  require_relative 'app/client'
end
