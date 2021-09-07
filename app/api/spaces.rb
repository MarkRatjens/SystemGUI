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
