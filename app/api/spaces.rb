require 'spaces'

module App
  class Api
    class Spaces

      def universe
        ::Spaces::Space.universe
      end

      def directory
        ::Spaces::Space.universes.path
      end

    end
  end
end
