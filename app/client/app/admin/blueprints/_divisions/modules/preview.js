app.admin.blueprints.modules.preview = (router, blueprint) => (a,x) =>
Object.keys(blueprint.modules || {}).length ?
[
  'Modules',
  x.out(blueprint.modules),
] : null
