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
    require_relative 'api/models'
    require_relative 'api/session'
    require_relative 'api/setup'
    require_relative 'api/routes'

    helpers Sinatra::Cookies
    helpers Sinatra::Streaming

    register Routes

    after do
      return if content_type
      return 204 if response.body.empty?
      content_type 'application/json'
    end

    before do
      return unless request.content_type == 'application/json'
      params.merge!(JSON.parse(request.body.read))
      puts params.to_yaml
    end

    def path
      request.fullpath.sub('/api', '')
    end

    def action(action, **options)
      @controller.control(action, **options).to_json
    end

    ## This method is used to convert Sinatra::IndifferentHash to
    ## a Hash, because JSON.generate was failing with IndifferentHash.
    def deep_to_h(obj)
      if obj.is_a?(Array)
        obj.map{|v| deep_to_h(v)}
      elsif obj.is_a?(Sinatra::IndifferentHash)
        obj.to_h.transform_values{|v| deep_to_h(v)}
      else
        obj
      end
    end
  end
end
