# module App
#   class Api
#     module Routes
#       module Blueprints::Instance
#         extend Sinatra::Extension
#         include Models
#
#         before '/blueprint/:id/?*' do
#           @blueprint = Blueprint.new(params[:id])
#         end
#
#         # Show blueprint
#         get '/blueprint/:id' do
#           @blueprint.to_json
#         end
#
#         # Delete blueprint
#         delete '/blueprint/:id' do
#           @blueprint.delete.to_json
#         end
#
#         # Show blueprint specification, i.e. blueprint.json
#         get '/blueprint/:id/specification' do
#           @blueprint.specification.to_json
#         end
#
#         # Update blueprint specification, i.e. blueprint.json
#         put '/blueprint/:id/specification' do
#           @blueprint.specification.update(JSON.parse(request.body.read)).to_json
#         end
#
#         # Publish blueprint
#         post '/blueprint/:id/publication' do
#           @blueprint.publication.create(params[:publication]).to_json
#         end
#
#         # Export blueprint publication
#         post '/blueprint/:id/publication/export' do
#           @blueprint.publication.export(params[:message]).to_json
#         end
#
#         # Show publication diffs
#         post '/blueprint/:id/publication/diffs' do
#           @blueprint.publication.diffs.to_json
#         end
#
#         # Show blueprint license.
#         get '/blueprint/:id/license' do
#           content_type 'text/markdown'
#           @blueprint.license.to_s
#         end
#
#         # Update blueprint license.
#         put '/blueprint/:id/license' do
#           @blueprint.license.update(params[:license]).to_json
#         end
#
#         # Show blueprint readme.
#         get '/blueprint/:id/readme' do
#           content_type 'text/markdown'
#           @blueprint.readme.to_s
#         end
#
#         # Update blueprint readme.
#         put '/blueprint/:id/readme' do
#           @blueprint.readme.update(params[:readme]).to_json
#         end
#
#         # Show icon metadata.
#         get '/blueprint/:id/icon' do
#           @blueprint.icon.to_json
#         end
#
#         # Send icon without border.
#         get '/blueprint/:id/icon/thumbnail' do
#           send_file(@blueprint.icon.path, type: 'image/png')
#         end
#
#         # Send icon with border.
#         get '/blueprint/:id/icon/bordered' do
#           send_file(@blueprint.icon.bordered_path, type: 'image/png')
#         end
#
#         # Update icon
#         put '/blueprint/:id/icon' do
#           @blueprint.icon.update(params[:icon][:tempfile]).to_json
#         end
#
#         # Delete icon
#         delete '/blueprint/:id/icon' do
#           @blueprint.icon.delete.to_json
#         end
#       end
#     end
#   end
# end
