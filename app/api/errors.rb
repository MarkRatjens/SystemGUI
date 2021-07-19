module App
  class Api

    not_found do
      content_type :text
      status 404
      "Server 404. Route not found: #{request.request_method} '#{request.path}'."
    end

    error App::Error do |e|
      content_type :text
      status e.status
      e.to_s
    end

    error do |e|
      content_type :text
      status 500
      [e.message, *e.backtrace].join("\n").tap { |message| logger.error(message) }
    end

  end
end
