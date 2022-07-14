app.blueprints.design.blueprint.resources.preview = (route, blueprint) =>
blueprint.resources ? app.navBox(
  route,
  [
    'Resources',
    x.out(blueprint.resources),
  ],
  'resources',
) : ''
