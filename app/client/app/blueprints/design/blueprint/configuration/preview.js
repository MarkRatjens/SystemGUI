app.blueprints.design.blueprint.configuration.preview = (route, blueprint) => (a,x) =>
blueprint.configuration ? app.navBox(
  route,
  [
    'Configuration',
    x.out(blueprint.configuration),
  ],
  'configuration',
) : null
