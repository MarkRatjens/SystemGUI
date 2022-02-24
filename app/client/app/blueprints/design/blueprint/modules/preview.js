app.blueprints.design.blueprint.modules.preview = (route, blueprint) => 
blueprint.modules ? app.navBox(
  route,
  [
    'Modules',
    x.out(blueprint.modules),
  ],
  'modules',
) : ''
