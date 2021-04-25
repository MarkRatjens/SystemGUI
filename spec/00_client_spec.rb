describe App::Client do
  let(:app) { App::Client.new }
  after(:each) { expect(response.status).to eq(200) }

  context "GET /" do
    let(:response) { get "/" }
    it "Returns client index.html" do
      expect(response.content_type).to start_with('text/html')
      expect(response.body).to start_with('<!DOCTYPE html>')
      expect(response.body).to include('<title>Engines</title>')
    end
  end

  context "GET /app.js" do
    let(:response) { get "/app.js" }
    it "Returns client app.js" do
      expect(response.content_type).to start_with('application/javascript')
      expect(response.body).to start_with("'use strict'\nlet app")
    end
  end
end
