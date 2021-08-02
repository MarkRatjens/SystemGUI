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
        yield.run.payload
      end
    end
  end
end
