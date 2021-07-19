app.publicationLabel = (publication) => (a,x) => publication ? [
  publication.repository,
  publication.branch ? a.small(` ${publication.branch}`) : null,
] : null
