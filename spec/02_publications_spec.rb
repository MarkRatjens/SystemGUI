describe App::Api do
  let(:app) { App::Api.new }
  before(:each) {
    @identifier = 'test-phpmyadmin'
    @descriptor = {
      repository: 'https://github.com/MarkRatjens/phpmyadmin.git',
      identifier: @identifier
    }
  }
  after(:each) { expect(response.status).to eq(200) }
  after(:each) { expect(response.content_type).to start_with('application/json') }

  context "GET /publications before POST" do
    let(:response) { get "/publications" }
    it "Returns a list of identfiers that does not include :identifier" do
      expect(json_response).not_to include(@identifier)
    end
  end

  context "POST /publications" do
    let(:response) { post "/publications", descriptor: @descriptor }
    it "Returns :identfier" do
      expect(json_response).to eq(@identifier)
    end
  end

  context "GET /publications after POST but before DELETE" do
    let(:response) { get "/publications" }
    it "Returns a list of identfiers that includes :identifier" do
      expect(json_response).to include(@identifier)
    end
  end

  context "GET /publications/:identfier" do
    let(:response) { get "/publications/#{@identifier}" }
    it "Returns a publication" do
      expect(json_response[:identifier]).to eq(@identifier)
    end
  end

  context "DELETE /publications/:identfier" do
    let(:response) { delete "/publications/#{@identifier}" }
    it "Returns :identfier" do
      expect(json_response).to eq(@identifier)
    end
  end

  context "GET /publications after DELETE" do
    let(:response) { get "/publications" }
    it "Returns a list of identfiers that does not include :identifier" do
      expect(json_response).not_to include(@identifier)
    end
  end
end
