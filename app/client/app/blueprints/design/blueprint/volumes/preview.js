app.blueprints.design.blueprint.volumes.preview = (route, blueprint) => 
blueprint.volumes ? app.navBox(
  route,
  [
    'Volumes',
    x.out(blueprint.volumes),
  ],
  'volumes',
) : ''
