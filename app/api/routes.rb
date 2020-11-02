module App
  class Api

    def path
      request.fullpath.sub('/api', '')
    end

    module Routes
      extend Sinatra::Extension

      get '*' do
        result = @engines.get(path)
        status result.code
        content_type result.headers[:content_type]
        result.body
      end

      delete '*' do
        result = @engines.delete(path)
        status result.code
        content_type result.headers[:content_type]
        result.body
      end

      post '*' do
        result = @engines.post(
          path,
          content_type: request.content_type,
          payload: request.body,
        )
        status result.code
        content_type result.headers[:content_type]
        result.body
      end

      put '*' do
        result = @engines.put(
          path,
          content_type: request.content_type,
          payload: request.body,
        )
        status result.code
        content_type result.headers[:content_type]
        result.body
      end

    end
  end
end
