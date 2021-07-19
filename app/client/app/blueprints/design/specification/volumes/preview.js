app.blueprints.design.specification.volumes.preview = (route, specification) => (a,x) =>
specification.volumes ? app.navBox(
  route,
  [
    'Volumes',
    x.out(specification.volumes),
  ],
  'volumes',
) : null
