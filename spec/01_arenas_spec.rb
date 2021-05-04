describe App::Api do
  let(:app) { App::Api.new }
  before(:each) { @identifier = 'test-arena' }
  after(:each) { expect(response.status).to eq(200) }
  after(:each) { expect(response.content_type).to start_with('application/json') }

  context "Index arenas before Create" do
    let(:response) { get "/arenas" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end

  context "Create arena" do
    let(:response) { post "/arenas", identifier: @identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index arenas after Create but before Delete" do
    let(:response) { get "/arenas" }
    it "returns a list of identifiers that includes :identifier" do
      expect(parsed).to include(@identifier)
    end
  end

  context "Show arena" do
    let(:response) { get "/arenas/#{@identifier}" }
    it "returns an arena" do
      expect(parsed[:identifier]).to eq(@identifier)
    end
  end

  context "Delete arena" do
    let(:response) { delete "/arenas/#{@identifier}" }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index arenas after Delete" do
    let(:response) { get "/arenas" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end
end
