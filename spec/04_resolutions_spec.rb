describe App::Api do
  let(:app) { App::Api.new }
  before(:each) { @arena_identifier = 'test-arena' }
  before(:each) { @blueprint_identifier = 'phpmyadmin' }
  before(:each) { @identifier = "#{@arena_identifier}::#{@blueprint_identifier}" }
  before(:each) { @update = {identifier: @identifier, about: {title: 'UPDATE'}} }
  after(:each) { expect(response.status).to eq(200) }
  after(:each) { expect(response.content_type).to start_with('application/json') }

  context "Create mock arena for resolutions tests" do
    let(:response) { post "/arenas", identifier: @arena_identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@arena_identifier)
    end
  end

  context "Bootstrap mock arena for resolutions tests" do
    let(:response) { post "/arenas/#{@arena_identifier}/bootstrap", blueprint_identifier: @blueprint_identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@arena_identifier)
    end
  end

  context "Resolve mock arena for resolutions tests" do
    let(:response) { post "/arenas/#{@arena_identifier}/resolve", blueprint_identifier: @blueprint_identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@arena_identifier)
    end
  end

  context "Index resolutions before Create" do
    let(:response) { get "/resolutions" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end

  context "Create resolution" do
    let(:response) { post "/resolutions", arena_identifier: @arena_identifier, blueprint_identifier: @blueprint_identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index resolutions after Create but before Delete" do
    let(:response) { get "/resolutions" }
    it "returns a list of identifiers that includes :identifier" do
      expect(parsed).to include(@identifier)
    end
  end

  context "Show resolution " do
    let(:response) { get "/resolutions/#{@identifier}" }
    it "returns a resolution" do
      expect(parsed[:identifier]).to eq(@identifier)
    end
  end

  context "Update resolution" do
    let(:response) {
      header 'CONTENT_TYPE', 'application/json'
      put "/resolutions/#{@identifier}", JSON.generate(@update)
    }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Show resolution after Update" do
    let(:response) { get "/resolutions/#{@identifier}" }
    it "returns an updated resolution" do
      expect(parsed[:about][:title]).to eq(@update[:about][:title])
    end
  end

  context "Delete resolution" do
    let(:response) { delete "/resolutions/#{@identifier}" }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index resolutions after Delete" do
    let(:response) { get "/resolutions" }
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
end
