app.locationLabel = (publication) => (a,x) => publication ? [
  publication.repository,
  publication.branch ? a.small(` ${publication.branch}`) : null,
  publication.key ? [a.br, a.i(a.small(` ${publication.key}`))] : null,
] : null
