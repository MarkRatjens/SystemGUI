require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'
require 'byebug' if Sinatra::Base.development?
require 'webmachine/adapters/rack'


require './app'

require "webmachine"
require "webmachine/adapters/rack"

class TestResource < Webmachine::Resource
  def to_html
    parts = %w{Hello, World!}
    Fiber.new do
      parts.each do |part|
        Fiber.yield part
        sleep 0.5
      end
      nil
    end
  end
end

App::Socket = Webmachine::Application.new do |app|
  app.routes do
    add [], TestResource
  end
end

App::Socket.configure do |config|
  config.adapter = :Rack
  config.adapter_options[:server] = "thin"
end


map('/node_modules') { run Rack::Directory.new('node_modules') }
map('/api') { run App::Api }
map('/socket') { run App::Socket }
map('/') { run App::Client }
