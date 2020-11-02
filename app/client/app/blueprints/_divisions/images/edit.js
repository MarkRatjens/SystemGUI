app.blueprints.images.edit = (router, blueprint) =>
app.blueprints.form({
  router: router,
  object: blueprint.images[router.params.image_id],
  form: app.blueprints.images.form,
  update: (form) => {
    blueprint.images[router.params.image_id] = form;
    return blueprint;
  },
})
