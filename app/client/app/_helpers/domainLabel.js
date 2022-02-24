app.domainLabel = (domain) => a.span([
  domain.identifier, ' ',
  domain.primary
  ? a.small(app.icon('fas fa-star', 'Primary'))
  : ''
])
