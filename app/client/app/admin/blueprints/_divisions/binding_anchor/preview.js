app.admin.blueprints.binding_anchor.preview = (router, blueprint) => (a,x) =>
blueprint.binding_anchor ? [
  'Binding anchor',
  blueprint.binding_anchor ? x.out(blueprint.binding_anchor) : null,
] : null
