require 'spaces'

module App
  class Api
    class Spaces

      def universe
        ::Spaces::Space.universe
      end

      def path
        ::Spaces::Space.universes.path
      end

    end
  end
end
