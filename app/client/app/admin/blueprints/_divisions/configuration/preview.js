app.admin.blueprints.configuration.preview = (router, blueprint) => (a,x) =>
Object.keys(blueprint.configuration || {}).length ?
a.div([
  'Configuration',
  x.out(blueprint.configuration),
]) : a['_']
