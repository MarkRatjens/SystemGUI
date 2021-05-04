require 'rspec'
require 'rack/test'
require './app'
require './spec/helpers/crud_helper'

RSpec.configure do |conf|
  conf.include Rack::Test::Methods
end

# include CrudHelper

# Optionally wipe data and reseed.
puts "Wipe existing application data and seed with new data? (y/n)"
if gets.chomp.downcase == 'y'
  universe.workspace.rmtree if universe.workspace.exist?
  puts "Seeding application with new data..."
  # TODO: Write a seed script. Using x/scripts.rb for the time being.
  require '../Spaces/x/scripts.rb'
end

def parsed
  JSON.parse(response.body, symbolize_names: true)
end
