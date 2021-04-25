app.admin.blueprints.repositories.preview = (router, blueprint) => (a,x) =>
blueprint.repositories ? [
  'Repositories',
  a.ul(
    blueprint.repositories.map(repository => a.li(repository.descriptor.repository))
  ),
] : a._
