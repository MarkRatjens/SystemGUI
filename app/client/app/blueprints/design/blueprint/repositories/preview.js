app.blueprints.design.blueprint.repositories.preview = (route, blueprint) => (a,x) =>
blueprint.repositories ? app.navBox(
  route,
  [
    'Repositories',
    x.out(blueprint.repositories),
  ],
  'repositories',
) : null
