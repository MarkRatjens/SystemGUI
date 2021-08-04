app.blueprints.design.blueprint.images.edit = (route, blueprint) =>
app.blueprints.design.blueprint.form({
  route: route,
  object: blueprint.images[route.params.image_id],
  form: app.blueprints.design.blueprint.images.form,
  digest: (form) => {
    blueprint.images[route.params.image_id] = form;
    return {model: blueprint};
  },
})
