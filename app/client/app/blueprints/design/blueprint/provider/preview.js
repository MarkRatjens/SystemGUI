app.blueprints.design.blueprint.provider.preview = (route, blueprint) => (a,x) =>
blueprint.provider ? app.navBox(
  route,
  [
    'Provider',
    x.out(blueprint.provider),
  ],
  'provider',
) : null
