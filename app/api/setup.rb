LetterAvatar.setup do |config|
  config.colors_palette = :iwanthue
  config.pointsize = 400
  config.cache_base_path = App::Api.spaces.directory.join('icons')
end
