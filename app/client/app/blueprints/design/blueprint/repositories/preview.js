app.blueprints.design.blueprint.repositories.preview = (route, blueprint) => 
blueprint.repositories ? app.navBox(
  route,
  [
    'Repositories',
    x.out(blueprint.repositories),
  ],
  'repositories',
) : ''
