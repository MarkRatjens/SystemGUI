app.admin.blueprints.specification.repositories.preview = (route, specification) => (a,x) =>
specification.repositories ? [
  'Repositories',
  a.ul(
    specification.repositories.map(repository => a.li(repository.descriptor.repository))
  ),
] : a._
