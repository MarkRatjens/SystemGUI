app.blueprints.design.blueprint.bindings.preview = (route, blueprint) => (a,x) =>
blueprint.bindings ? app.navBox(
  route,
  [
    'Bindings',
    x.out(blueprint.bindings),
  ],
  'bindings'
) : null
