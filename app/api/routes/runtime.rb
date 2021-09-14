module App
  class Api
    module Routes
      module Runtime
        extend Sinatra::Extension

        # Data for runtime utilisation graphs.
        # TODO: These routes need thought, or to be deleted.
        # TODO: Stream live data from monitoring API.
        get '/runtime/@:identifier/metrics' do
          File.read('./app/api/dummydata/network/vector.js')
        end

        get '/runtime/@:identifier/metrics/matrix' do
          File.read('./app/api/dummydata/network/matrix.js')
        end
        
      end
    end
  end
end
