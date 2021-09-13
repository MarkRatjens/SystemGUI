require 'spaces'

module App
  class Api
    class Spaces

      def path
        ::Spaces::Space.universes.path
      end

    end
  end
end
