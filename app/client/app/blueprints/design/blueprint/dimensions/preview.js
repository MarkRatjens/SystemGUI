app.blueprints.design.blueprint.dimensions.preview = (route, blueprint) =>
blueprint.dimensions ? app.navBox(
  route,
  [
    'Dimensions',
    x.out(blueprint.dimensions),
  ],
  'dimensions',
) : ''
