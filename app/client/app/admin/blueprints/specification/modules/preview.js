app.admin.blueprints.specification.modules.preview = (route, specification) => (a,x) =>
Object.keys(specification.modules || {}).length ?
a.div([
  'Modules',
  x.out(specification.modules),
]) : a._
