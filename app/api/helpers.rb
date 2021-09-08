module App
  class Api
    module Helpers

      def parse(json)
        JSON.parse(json, symbolize_names: true)
      end

      def path
        request.fullpath.sub('/api', '')
      end

      # TODO: move settings to spaces
      def settings_filepath
        universe_dir.mkpath
        universe_dir.join('settings.yaml').tap { |file| FileUtils.touch(file) }
      end
      def universe_dir
        Api.spaces.universe.workspace
      end

      def action(command)
        # TODO: Use **params instead of **command_args. Remove :command_args method.
        @controller.control(command: command, **command_args).to_json
      end

      def command_args
        params.slice(:identifier, :model, :command, :new_identifier, :force).to_h.symbolize_keys
      end

      def exception_message_for(e)
        [e.message, '', *e.backtrace].join("\n")
      end

      def spaces_path_for(space, *joins)
        Api.spaces.universe.send(space).path.join(*joins)
      end

      def stream_output_from(filepath)
        stream do |out|
          begin
            keep_alive(out)
            output_events_from(filepath, out)
          rescue => e
            output_exception(e, out)
          end
          @stream_open = false # to close keep_alive
        end
      end

      def output_events_from(filepath, out)
        tail_file(filepath) do |line|
          break if line.strip == 4.chr
          out.puts("event: output")
          out.puts("data: #{line}\n")
        end
        out.puts("event: eot")
        out.puts("data: EOT\n")
      end

      def output_exception(e, out)
        out.puts("event: exception")
        [e.message, '', *e.backtrace].join("\n").split("\n").tap do |lines|
          lines.each do |line|
            out.puts("data: #{line}")
          end
          out.puts("data: \n\n")
        end
      end

      def tail_file(filepath)
        File.open(filepath, 'r').tap do |file|
          while !@tail_file_stopped do
            sleep 0.01
            file.seek(0,IO::SEEK_SET) unless @tail_file_started
            select([file])
            file.gets.tap do |line|
              next unless line
              @tail_file_started = true
              @tail_file_stopped = line.strip == 4.chr # ascii 04 is EOT
              yield line if !@tail_file_stopped
            end
          end
        end
      end

      def keep_alive(out)
        @stream_open = true
        Thread.new do
          while @stream_open do
            out.puts(':')
            sleep 10
          end
        end
      end

    end
  end
end
