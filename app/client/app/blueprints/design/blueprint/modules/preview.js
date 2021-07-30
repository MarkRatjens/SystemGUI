app.blueprints.design.blueprint.modules.preview = (route, blueprint) => (a,x) =>
blueprint.modules ? app.navBox(
  route,
  [
    'Modules',
    x.out(blueprint.modules),
  ],
  'modules',
) : null
