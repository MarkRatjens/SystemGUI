require 'rest-client'

module App
  class Api
    module Models
      class Engines

        def initialize(api_url, token)
          @api_url = api_url
          @token = token
        end

        def get(path, options={})
          api_call path, options
        end

        def post(path, options={})
          api_call path,
          method: :post,
          **options
        end

        def put(path, options={})
          api_call path,
          method: :put,
          **options
        end

        def delete(path, options={})
          api_call path,
          method: :delete,
          **options
        end

        def stream_chunks(path, options={}, &block)
          block_response = response_chunks &block
          api_call(path, block_response: block_response, **options)
        end

        def stream_lines(path, options={}, &block)
          block_response = response_lines &block
          api_call(path, block_response: block_response, **options)
        end

        private

        def response_chunks
          Proc.new do |response|
            response.read_body do |chunk|
              yield chunk
            end
          end
        end

        def response_lines
          Proc.new do |response|
            response.read_body do |chunk|
              chunk.split("\n").each do |line|
                yield line
              end
            end
          end
        end

        def api_call(path, options={})
          request_options =
          response_for do
            RestClient::Request.execute({
              method: :get,
              url: url_for(path),
              timeout: 120,
              verify_ssl: false,
              headers: {
                content_type: options[:content_type],
                access_token: @token
              },
              **options
            })
          end
        end

        def url_for(path)
          "#{@api_url}#{path}"
        end

        def response_for(&block)
          yield
        rescue RestClient::InternalServerError => e
          raise "#{e.http_body}\nEngines API Error."
        end

      end
    end
  end
end
