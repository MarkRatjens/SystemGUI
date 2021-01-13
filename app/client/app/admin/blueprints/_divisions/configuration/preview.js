app.admin.blueprints.configuration.preview = (router, blueprint) => (a,x) =>
Object.keys(blueprint.configuration || {}).length ?
[
  'Configuration',
  x.out(blueprint.configuration),
] : null
