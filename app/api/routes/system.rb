module App
  class Api
    module Routes
      module System
        extend Sinatra::Extension
        # Show system settings
        # TODO: Use real data!
        get '/system' do
          {
            label: {
              text: 'My server!',
              color: 'white',
              background_color: 'blue',
            }
          }.to_json
        end

        # Update system settings
        # TODO: persist the data
        post '/system' do
          p 'POST System Settings'
          p JSON.parse(request.body.read)
          system_settings.to_json
        end

        # SYSTEM METRICS

        # Data for system utilisation graphs.
        # TODO: Stream live data from monitoring API.
        get '/system/metrics/network' do
          File.read('./app/api/dummydata/network/vector.js')
        end

        get '/system/metrics/network/matrix' do
          File.read('./app/api/dummydata/network/matrix.js')
        end
      end
    end
  end
end
