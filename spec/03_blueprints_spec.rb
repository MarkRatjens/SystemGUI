describe App::Api do
  let(:app) { App::Api.new }
  before(:each) { @identifier = 'test-blueprint' }
  before(:each) { @update = {identifier: @identifier, about: {title: 'UPDATE'}} }
  after(:each) { expect(response.status).to eq(200) }
  after(:each) { expect(response.content_type).to start_with('application/json') }

  context "Index blueprints before Create" do
    let(:response) { get "/blueprints" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end

  context "Create blueprint" do
    let(:response) { post "/blueprints", identifier: @identifier }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index blueprints after Create but before Delete" do
    let(:response) { get "/blueprints" }
    it "returns a list of identifiers that includes :identifier" do
      expect(parsed).to include(@identifier)
    end
  end

  context "Show blueprint" do
    let(:response) { get "/blueprints/#{@identifier}" }
    it "returns a blueprint" do
      expect(parsed[:identifier]).to eq(@identifier)
    end
  end

  context "Update blueprint" do
    let(:response) {
      header 'CONTENT_TYPE', 'application/json'
      put "/blueprints/#{@identifier}", JSON.generate(@update)
    }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Show blueprint" do
    let(:response) { get "/blueprints/#{@identifier}" }
    it "returns an updated blueprint" do
      expect(parsed[:about][:title]).to eq(@update[:about][:title])
    end
  end

  context "Delete blueprint" do
    let(:response) { delete "/blueprints/#{@identifier}" }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index blueprints after Delete" do
    let(:response) { get "/blueprints" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end
end
