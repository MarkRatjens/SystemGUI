app.blueprints.design.blueprint.provider.preview = (route, blueprint) => 
blueprint.provider ? app.navBox(
  route,
  [
    'Provider',
    x.out(blueprint.provider),
  ],
  'provider',
) : ''
