app.locationLabel = (location) => location.exist ? a.span([
  location.repository,
  location.branch ? a.small(` ${location.branch}`) : '',
  location.key_identifier ? a.div([a.i(a.small(` ${location.key_identifier}`))]) : '',
]) : app.placeholder('No location')
