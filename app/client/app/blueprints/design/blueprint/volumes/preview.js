app.blueprints.design.blueprint.volumes.preview = (route, blueprint) => (a,x) =>
blueprint.volumes ? app.navBox(
  route,
  [
    'Volumes',
    x.out(blueprint.volumes),
  ],
  'volumes',
) : null
