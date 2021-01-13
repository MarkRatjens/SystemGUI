app.admin.blueprints.permissions.preview = (router, blueprint) => (a,x) =>
Object.keys(blueprint.permissions || {}).length ?
[
  'Permissions',
  x.out(blueprint.permissions),
] : null
