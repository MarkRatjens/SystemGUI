app.blueprints.design.blueprint.bindings.preview = (route, blueprint) => 
blueprint.bindings ? app.navBox(
  route,
  [
    'Bindings',
    x.out(blueprint.bindings),
  ],
  'bindings'
) : ''
