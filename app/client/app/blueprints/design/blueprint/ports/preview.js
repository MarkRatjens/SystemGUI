app.blueprints.design.blueprint.ports.preview = (route, blueprint) => 
blueprint.ports ? app.navBox(
  route,
  [
    'Ports',
    x.out(blueprint.ports),
  ],
  'ports',
) : ''
