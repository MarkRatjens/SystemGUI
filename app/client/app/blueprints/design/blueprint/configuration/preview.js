app.blueprints.design.blueprint.configuration.preview = (route, blueprint) => 
blueprint.configuration ? app.navBox(
  route,
  [
    'Configuration',
    x.out(blueprint.configuration),
  ],
  'configuration',
) : ''
