app.blueprints.design.blueprint.resources.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint.resources[route.params.resource_id],
  form: app.blueprints.design.blueprint.resources.form,
  digest: (form) => {
    blueprint.resources[route.params.resource_id] = app.compact(form);
    return {model: blueprint};
  },
}),
