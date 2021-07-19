app.admin.blueprints.specification.otherPackages.preview = (route, specification) => (a,x) =>
(specification.other_packages || []).length ?
a.div([
  'Other packages',
  x.out(specification.other_packages),
]) : a._
