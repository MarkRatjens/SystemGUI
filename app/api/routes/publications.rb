module App
  class Api
    module Routes
      module Publications
        extend Sinatra::Extension

        before '/publications/?*' do
          @controller = ::Publishing::Controllers::Controller.new
        end

        get '/publications/import/output' do
          content_type "text/event-stream"
          stream_output_from(spaces_path_for(:publications, 'import.out'))
        end

        get '/publications/@:identifier/import/output' do
          content_type "text/event-stream"
          stream_output_from(spaces_path_for(:publications, 'import.out'))
        end

        get '/publications/@:identifier/export/output' do
          content_type "text/event-stream"
          stream_output_from(spaces_path_for(:publications, 'export.out'))
        end

      end
    end
  end
end
