module App
  class Api

    error App::Error do |e|
      content_type :text
      status e.status
      e.message
    end

    error do |e|
      content_type :terminal
      status 500
      e.full_message.tap { |message| logger.error(message) }
    end

  end
end
