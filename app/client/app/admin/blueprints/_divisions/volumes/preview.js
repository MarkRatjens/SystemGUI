app.admin.blueprints.volumes.preview = (router, blueprint) => (a,x) =>
blueprint.volumes ? [
  'Volumes',
  blueprint.volumes ? x.out(blueprint.volumes) : a._,
] : a._
