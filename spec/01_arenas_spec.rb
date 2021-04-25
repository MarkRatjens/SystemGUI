describe App::Api do
  let(:app) { App::Api.new }
  before(:each) { @identifier = 'test-arena' }
  after(:each) { expect(response.status).to eq(200) }
  after(:each) { expect(response.content_type).to start_with('application/json') }

  context "GET /arenas before POST" do
    let(:response) { get "/arenas" }
    it "Returns a list of identfiers that does not include :identifier" do
      expect(json_response).not_to include(@identifier)
    end
  end

  context "POST /arenas" do
    let(:response) { post "/arenas", identifier: @identifier }
    it "Returns :identfier" do
      expect(json_response).to eq(@identifier)
    end
  end

  context "GET /arenas after POST but before DELETE" do
    let(:response) { get "/arenas" }
    it "Returns a list of identfiers that includes :identifier" do
      expect(json_response).to include(@identifier)
    end
  end

  context "GET /arenas/:identfier" do
    let(:response) { get "/arenas/#{@identifier}" }
    it "Returns an arena" do
      expect(json_response[:identifier]).to eq(@identifier)
    end
  end

  context "DELETE /arenas/:identfier" do
    let(:response) { delete "/arenas/#{@identifier}" }
    it "Returns :identfier" do
      expect(json_response).to eq(@identifier)
    end
  end

  context "GET /arenas after DELETE" do
    let(:response) { get "/arenas" }
    it "Returns a list of identfiers that does not include :identifier" do
      expect(json_response).not_to include(@identifier)
    end
  end
end
