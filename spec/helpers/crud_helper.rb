# module CrudHelper
#
#   before(:each) { @identifier = "test-#{space}-space" }
#
#   def hooks(space)
#     after(:each) {
#       expect(response.status).to eq(200)
#       expect(response.content_type).to start_with('application/json')
#     }
#   end
#
#   def crud(space, options={})
#     let(:app) { App::Api.new }
#     before(:each) {
#       @identifier = "test-#{space}-space"
#       @create_with = options[:create_with] || {identifier: @identifier}
#     }
#     after(:each) {
#       expect(response.status).to eq(200)
#       expect(response.content_type).to start_with('application/json')
#     }
#
#     context "GET /#{space} before POST" do
#       let(:response) { get "/#{space}" }
#       it "Returns a list of identifiers that does not include :identifier" do
#         expect(parsed).not_to include(@identifier)
#       end
#     end
#
#     context "POST /#{space}" do
#       let(:response) { post "/#{space}", @create_with }
#       it "Returns :identifier" do
#         expect(parsed).to eq(@identifier)
#       end
#     end
#
#     context "GET /#{space} after POST but before DELETE" do
#       let(:response) { get "/#{space}" }
#       it "Returns a list of identifiers that includes :identifier" do
#         expect(parsed).to include(@identifier)
#       end
#     end
#
#     context "GET /#{space}/:identifier" do
#       let(:response) { get "/#{space}/#{@identifier}" }
#       it "Returns an object" do
#         $OBJECT = parsed
#         expect(parsed[:identifier]).to eq(@identifier)
#       end
#     end
#
#     context "PUT /#{space}/:identifier" do
#       let(:response) { put "/#{space}/#{@identifier}", JSON.generate($OBJECT) }
#       it "Returns :identifier" do
#         expect(parsed).to eq(@identifier)
#       end
#     end
#
#     context "DELETE /#{space}/:identifier" do
#       let(:response) { delete "/#{space}/#{@identifier}" }
#       it "Returns :identifier" do
#         expect(parsed).to eq(@identifier)
#       end
#     end
#
#     context "GET /#{space} after DELETE" do
#       let(:response) { get "/#{space}" }
#       it "Returns a list of identifiers that does not include :identifier" do
#         expect(parsed).not_to include(@identifier)
#       end
#     end
#   end
# end
