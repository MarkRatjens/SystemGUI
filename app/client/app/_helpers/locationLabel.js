app.locationLabel = (location) => (a,x) => location.exist ? [
  location.repository,
  location.branch ? a.small(` ${location.branch}`) : null,
  location.key_identifier ? [a.br, a.i(a.small(` ${location.key_identifier}`))] : null,
] : app.placeholder('No location')
