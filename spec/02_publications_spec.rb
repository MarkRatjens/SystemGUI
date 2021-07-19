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

  context "Index publications before Create" do
    let(:response) { get "/publications" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end

  context "Create publication" do
    let(:response) { post "/publications", descriptor: @descriptor }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index publications after Create but before Delete" do
    let(:response) { get "/publications" }
    it "returns a list of identifiers that includes :identifier" do
      expect(parsed).to include(@identifier)
    end
  end

  context "Show publication" do
    let(:response) { get "/publications/#{@identifier}" }
    it "returns a publication" do
      expect(parsed[:identifier]).to eq(@identifier)
    end
  end

  context "Delete publication" do
    let(:response) { delete "/publications/#{@identifier}" }
    it "returns :identifier" do
      expect(parsed).to eq(@identifier)
    end
  end

  context "Index publications after Delete" do
    let(:response) { get "/publications" }
    it "returns a list of identifiers that does not include :identifier" do
      expect(parsed).not_to include(@identifier)
    end
  end
end
