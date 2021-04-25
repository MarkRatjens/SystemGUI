app.admin.blueprints.modules.preview = (router, blueprint) => (a,x) =>
Object.keys(blueprint.modules || {}).length ?
a.div([
  'Modules',
  x.out(blueprint.modules),
]) : a._
