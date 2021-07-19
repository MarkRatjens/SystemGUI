app.admin.blueprints.specification.volumes.preview = (route, specification) => (a,x) =>
specification.volumes ? [
  'Volumes',
  specification.volumes ? x.out(specification.volumes) : a._,
] : a._
