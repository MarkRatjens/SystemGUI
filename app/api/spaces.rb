require 'spaces'

module App
  class Api
    class Spaces

      def universe
        ::Spaces::Space.universe
      end

      def directory
        ::Spaces::Space.universes.path.join('universe')
      end

    end
  end
end
