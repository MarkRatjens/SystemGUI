module App
  class Api
    module Helpers
      require_relative 'docker/streaming'

      def docker
        begin
          {
            result: yield
          }.to_json
        rescue Docker::Error => e
          {
            errors: [e.message]
          }.to_json
        end
      end

      # Instructions START STOP PAUSE KILL
      # Containers can take a while to change state
      # Threaded so that UI gets immediate response,
      # which confirms that that instruction has been accepted.
      # Any changes in container state are then sent to the UI via events.
      def docker_container_instruction(container, ui_instruction)
        Thread.new do
          container.instruct(docker_container_instruction_for(container, ui_instruction))
        rescue ::Docker::Error::ConflictError,
          ::Docker::Error::NotFoundError => e
          logger.info JSON.parse(e.message)['message']
        rescue => e
          logger.warn e.full_message
        end
        {
          result: "#{params[:instruction]} #{params[:container_id]}"
        }.to_json
      end

      def docker_container_instruction_for(container, ui_instruction)
        case ui_instruction
        when 'start'
          return 'unpause' if container.paused?
          return 'restart' if container.running?
          return 'start'
        when 'pause'
          return 'unpause' if container.paused?
          return 'pause'
        else
          return ui_instruction
        end
      end
    end
  end
end
