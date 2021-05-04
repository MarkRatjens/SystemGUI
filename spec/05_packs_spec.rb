describe App::Api do
  let(:app) { App::Api.new }
  before(:each) { @arena_identifier = 'test-arena' }
  before(:each) { @blueprint_identifier = 'phpmyadmin' }
  before(:each) { @identifier = "#{@arena_identifier}::#{@blueprint_identifier}" }
  after(:each) { expect(response.status).to eq(200) }
  after(:each) { expect(response.content_type).to start_with('application/json') }

  context "Create mock arena for packings tests" do
    let(:response) { post "/arenas", identifier: @arena_identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@arena_identifier)
    end
  end

  context "Create mock resolution for packings tests" do
    let(:response) { post "/resolutions", arena_identifier: @arena_identifier, blueprint_identifier: @blueprint_identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index packs before Create" do
    let(:response) { get "/packs" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end

  context "Create /packs" do
    let(:response) { post "/packs", identifier: @identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index packs after Create but before Delete" do
    let(:response) { get "/packs" }
    it "returns a list of identifiers that includes :identifier" do
      expect(parsed).to include(@identifier)
    end
  end

  context "Show pack " do
    let(:response) { get "/packs/#{@identifier}" }
    it "returns a pack" do
      expect(parsed[:identifier]).to eq(@identifier)
    end
  end

  context "Delete pack" do
    let(:response) { delete "/packs/#{@identifier}" }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index packs after Delete" do
    let(:response) { get "/packs" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end

  context "Tear down mock arena" do
    let(:response) { delete "/arenas/#{@arena_identifier}" }
    it "returns :arena_identifier" do
      expect(parsed).to eq(@arena_identifier)
    end
  end

  context "Tear down mock resolution" do
    let(:response) { delete "/resolutions/#{@identifier}" }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end
end
