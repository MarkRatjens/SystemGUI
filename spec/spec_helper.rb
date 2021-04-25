require 'rspec'
require 'rack/test'
require './app'

RSpec.configure do |conf|
  conf.include Rack::Test::Methods
end

# Optionally wipe data and reseed.
puts "Wipe existing application data and seed with new data? (y/n)"
input = gets.chomp
if input.downcase == 'y'
  universe.workspace.rmtree if universe.workspace.exist?
  puts "Seeding application with new data..."
  # TODO: Write a seed script. Using x/scripts.rb for the time being.
  require_relative '../../Spaces/x/scripts.rb'
end

def json_response
  JSON.parse(response.body).tap do |body|
    body.transform_keys!(&:to_sym) if body.is_a? Hash
  end
end
