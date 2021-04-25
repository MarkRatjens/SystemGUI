app.admin.blueprints.provider.preview = (router, blueprint) => (a,x) =>
(blueprint.provider || {}).type ?
[
  'Provider',
  x.out(blueprint.provider),
] : a._
