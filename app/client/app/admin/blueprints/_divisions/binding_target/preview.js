app.admin.blueprints.binding_target.preview = (router, blueprint) => (a,x) =>
blueprint.binding_target ? [
  'Binding target',
  blueprint.binding_target ? x.out(blueprint.binding_target) : a['_'],
] : a['_']
