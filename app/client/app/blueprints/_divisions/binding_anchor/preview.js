app.blueprints.binding_anchor.preview = (router, blueprint) => (a,x) =>
blueprint.binding_anchor ? [
  'Anchor',
  blueprint.binding_anchor ? x.out(blueprint.binding_anchor.variables || 'No variables') : null,
] : null
