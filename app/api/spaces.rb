# Require docker here bacuase app fails to start when spaces left to do it.
# Probably some mac vs. linux file loading thing.
require 'docker'

require 'spaces'

module App
  class Api
    class Spaces
      def universe
        @universe ||= Universe.new
      end

      def workspace
        universe.workspace
      end

      def run
        payload = yield.run.payload
        raise Error.new("Spaces returned errors: #{payload.errors}") if payload.errors
        return payload.result if payload.result
        raise Error.new('Spaces returned an object with no result and no errors.')
      end
    end
  end
end
