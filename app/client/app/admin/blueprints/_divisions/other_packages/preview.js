app.admin.blueprints.other_packages.preview = (router, blueprint) => (a,x) =>
(blueprint.other_packages || []).length ?
a.div([
  'Other packages',
  x.out(blueprint.other_packages),
]) : a._
