module App
  class Api
    module Routes
      module Domains
        extend Sinatra::Extension

        before '/domains/?*' do
          @controller = ::Domains::Controllers::Controller.new
        end

      end
    end
  end
end
