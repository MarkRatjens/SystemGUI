app.blueprints.design.specification.repositories.preview = (route, specification) => (a,x) =>
specification.repositories ? app.navBox(
  route,
  [
    'Repositories',
    x.out(specification.repositories),
  ],
  'repositories',
) : null
