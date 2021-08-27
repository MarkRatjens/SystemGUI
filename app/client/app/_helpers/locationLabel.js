app.locationLabel = (location) => (a,x) => location.exist ? [
  location.repository,
  location.branch ? a.small(` ${location.branch}`) : null,
  location.key ? [a.br, a.i(a.small(` ${location.key}`))] : null,
] : app.placeholder('No location')
