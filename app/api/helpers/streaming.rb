module App
  class Api
    module Helpers

      def stream_from(&block)
        stream { |out| streaming(out, &block) }
      end

      def stream_action
        stream do |out|
          streaming(out) do |out|
            action(action: :tail, callback: callback(out))
          end
        end
      end

      def streaming(out)
        begin
          keep_alive(out)
          yield(out)
          send_eot(out)
          out.close
        rescue => e
          streaming_rescue(out, e)
        end
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

      def streaming_rescue(out, e)
        if !out.closed?
          send_exception(out, e)
          send_eot(out)
          out.close
        else
          logger.info "Stream rescued: #{e.message}"
        end
      end
    end
  end
end
