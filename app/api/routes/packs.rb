module App
  class Api
    module Routes
      module Packs
        extend Sinatra::Extension

        before '/packs/?*' do
          @controller = ::Spaces::Controllers::RESTController.new(space: :packing)
        end

        get '/packs' do
          action(:index, **params)
        end

        get '/packs/@:identifier' do
          # TODO: USE action(:show, **params)
          ::Packing::Controllers::Controller.new.show(identifier: params[:identifier]).to_json
        end

        get '/packs/@:identifier/summary' do
          pack = Api.spaces.universe.packs.by(params[:identifier])
          filepath = Api.spaces.universe.packs.path_for(pack).join('build.log')
          {result: {log: {exist: File.exists?(filepath)}}}.to_json
        end

        get '/packs/@:identifier/artifacts' do
          # TODO: USE action(:artifacts, **params)
          ::Packing::Controllers::Controller.new.artifacts(identifier: params[:identifier]).to_json
        end

        post '/packs/@:identifier/build' do
          # TODO: Build should be initiated with a POST. Doing it in the GET below as hack to get SSE to client for JS dev work.
          # TODO: USE action(:commit, **params)
          #       OR ::Packing::Controllers::Controller.new.commit(identifier: params[:identifier]).to_json
          {result: 'Building'}.to_json
        end

        get '/packs/@:identifier/build/follow' do
          # TODO: USE stream_for(**params)
          content_type "text/event-stream"
          identifier = params[:identifier]
          model = params[:model]
          started = Time.now.strftime("%H:%M:%S")
          begin
            stream(:keep_open) do |out|
              logger.info "STREAM:#{started} Builder log stream started."
              result = ::Packing::Controllers::Controller.new.commit(
                identifier: identifier,
                model: model,
              ) do |line|
                out.puts "data: #{line}\n\n"
              end
              if result[:errors]
                output = "\n\033[1;31mBuild command error.\n\033[0;31m#{result[:errors].join("\n")}\033[0m"
                output.split("\n").each do |line|
                  out.puts "data: #{line}\n\n"
                end
              end
              out.puts "data: #{4.chr}\n\n" # ASCII 4 is EOT (end of transmission)
              out.close
            end
            logger.info "STREAM:#{started} Builder log stream complete."
          rescue IOError => e
            logger.info "STREAM:#{started} Builder log stream lost its connection with user agent."
          end
        end

        get '/packs/@:identifier/log' do
          pack = Api.spaces.universe.packs.by(params[:identifier])
          filepath = Api.spaces.universe.packs.path_for(pack).join('build.log')
          {result: File.read(filepath)}.to_json
        end
      end
    end
  end
end
