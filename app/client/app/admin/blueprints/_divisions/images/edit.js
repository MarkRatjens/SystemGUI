app.admin.blueprints.images.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint.images[router.params.image_id],
  form: app.admin.blueprints.images.form,
  update: (form) => {
    blueprint.images[router.params.image_id] = form;
    return blueprint;
  },
})
