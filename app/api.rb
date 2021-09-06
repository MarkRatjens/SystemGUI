require 'pathname'
require 'mini_magick'
require 'letter_avatar'
require 'fastimage'

module App
  class Api < Sinatra::Base

    require_relative 'api/spaces'

    def self.spaces
      @spaces ||= Spaces.new
    end

    require_relative 'api/settings'
    require_relative 'api/mime'
    require_relative 'api/errors'
    require_relative 'api/helpers'
    require_relative 'api/models'
    require_relative 'api/session'
    require_relative 'api/setup'
    require_relative 'api/routes'

    helpers Sinatra::Cookies
    helpers Sinatra::Streaming
    helpers Helpers

    register Routes

    after do
      return if content_type
      return 204 if response.body.empty?
      content_type 'application/json'
    end

    before do
      return unless request.content_type == 'application/json'
      params.merge!(parse(request.body.read))
      puts params
    end

  end
end
