app.blueprints.design.blueprint.ports.preview = (route, blueprint) => (a,x) =>
blueprint.ports ? app.navBox(
  route,
  [
    'Ports',
    x.out(blueprint.ports),
  ],
  'ports',
) : null
