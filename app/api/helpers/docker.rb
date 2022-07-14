module App
  class Api
    module Helpers
      require_relative 'docker/streaming'

      def docker
        begin
          {
            result: yield
          }.to_json
        rescue Docker::Error => e
          {
            errors: [e.message]
          }.to_json
        end
      end
    end
  end
end
