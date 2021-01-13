app.admin.blueprints.packing.preview = (router, blueprint) => (a,x) =>
Object.keys(blueprint.packing || {}).length ?
[
  'Packing',
  x.out(blueprint.packing),
] : null
