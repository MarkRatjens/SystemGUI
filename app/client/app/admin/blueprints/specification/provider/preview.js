app.admin.blueprints.specification.provider.preview = (route, specification) => (a,x) =>
(specification.provider || {}).type ?
[
  'Provider',
  x.out(specification.provider),
] : a._
