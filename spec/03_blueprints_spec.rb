describe App::Api do
  let(:app) { App::Api.new }
  before(:each) { @identifier = 'test-blueprint' }
  after(:each) { expect(response.status).to eq(200) }
  after(:each) { expect(response.content_type).to start_with('application/json') }

  context "GET /blueprints before POST" do
    let(:response) { get "/blueprints" }
    it "Returns a list of identfiers that does not include :identifier" do
      expect(json_response).not_to include(@identifier)
    end
  end

  context "POST /blueprints" do
    let(:response) { post "/blueprints", identifier: @identifier }
    it "Returns :identfier" do
      expect(json_response).to eq(@identifier)
    end
  end

  context "GET /blueprints after POST but before DELETE" do
    let(:response) { get "/blueprints" }
    it "Returns a list of identfiers that includes :identifier" do
      expect(json_response).to include(@identifier)
    end
  end

  context "GET /blueprints/:identfier" do
    let(:response) { get "/blueprints/#{@identifier}" }
    it "Returns a blueprint" do
      expect(json_response[:identifier]).to eq(@identifier)
    end
  end

  context "DELETE /blueprints/:identfier" do
    let(:response) { delete "/blueprints/#{@identifier}" }
    it "Returns :identfier" do
      expect(json_response).to eq(@identifier)
    end
  end

  context "GET /blueprints after DELETE" do
    let(:response) { get "/blueprints" }
    it "Returns a list of identfiers that does not include :identifier" do
      expect(json_response).not_to include(@identifier)
    end
  end
end
