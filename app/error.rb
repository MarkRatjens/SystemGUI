module App
  class Error < StandardError

    class NotAuthenticated < Error
      def status
        401
      end
    end

    def message
      i18n.dig(language, klass) || "#{klass} error."
    end

    def klass
      self.class.to_s.split('::')[-1]
    end

    def language
      'en'
    end

    def i18n
      fp = "#{File.dirname(__FILE__)}/i18n.yaml"
      YAML.load_file(fp)
    end

    def status
      400
    end

  end
end
