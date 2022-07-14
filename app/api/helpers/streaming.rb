module App
  class Api
    module Helpers

      def stream_from(&block)
        stream { |out| streaming(out, &block) }
      end

      def tail_file(filepath)
        File.open(filepath, 'r').tap do |file|
          tail_file_started = false
          tail_file_stopped = false
          while !tail_file_stopped do
            sleep 0.01
            file.seek(0,IO::SEEK_SET) unless tail_file_started
            select([file])
            file.gets.tap do |line|
              next unless line
              tail_file_started = true
              tail_file_stopped = line.strip == 4.chr # ascii 04 is EOT
              yield line if !tail_file_stopped
            end
          end
        end
      end

      def stream_action
        stream do |out|
          streaming(out) do |out|
            action(action: :tail, callback: callback(out))
          end
        end
      end

      def streaming(out)
        keep_alive(out)
        yield(out)
        send_eot(out)
        out.close
        # begin
        # rescue => e
        #   debugger
        #   streaming_rescue(out, e)
        # end
      end

      def keep_alive(out)
        Thread.new do
          while !out.closed? do
            out_puts(out, ':')
            sleep 10
          end
        end
      end

      def callback(out)
        ->(line) { send_output(out, line) }
      end

      def out_puts(out, line)
        if !out.closed?
          out.puts(line)
        else
          raise App::Error::StreamClosed
        end
      end

      def send_eot(out)
        out_puts(out, "event: eot")
        out_puts(out, "data: EOT\n")
      end

      def send_timeout(out)
        out_puts(out, "event: timeout")
        out_puts(out, "data: TIMEOUT\n")
      end

      def send_output(out, line)
        out_puts(out, "event: output")
        out_puts(out, "data: #{line}\n")
      end

      def send_exception(out, e)
        out_puts(out, "event: exception")
        exception_message_for(e).split("\n").each do |line|
          out_puts(out, "data: #{line}")
        end
        out_puts(out, "data: \n\n")
      end
      #
      # def streaming_rescue(out, e)
      #   if !out.closed?
      #     send_exception(out, e)
      #     send_eot(out)
      #     out.close
      #   else
      #     logger.info "Stream rescued: #{e.message}"
      #   end
      # end

      # def stream_import_for(identifier, force=false)
      #   stream do |out|
      #     streaming(out) do |out|
      #       stream_import_files_for(identifier, out)
      #     end
      #   end
      # end
      #
      # def stream_import_files_for(identifier, out, imported=[])
      #   stream_import_file_for(identifier, out)
      #   imported.push(identifier)
      #   to_do = binding_targets_for(identifier) - imported
      #   to_do.each do |identifier|
      #     stream_import_files_for(identifier, out, imported)
      #   end
      # end
      #
      # def binding_targets_for(identifier)
      #   Blueprinting::Controllers::Controller.new.show(identifier: identifier).result.bindings.map(&:identifier)
      # end
      #
      # def stream_import_file_for(identifier, out)
      #   @controller.control(
      #     space: :publications,
      #     stream: :import,
      #     identifier: identifier,
      #     action: :tail,
      #     callback: callback(out)
      #   )
      # end

    end
  end
end
