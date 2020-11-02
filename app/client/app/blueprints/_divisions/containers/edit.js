app.blueprints.containers.edit = (router, blueprint) =>
app.blueprints.form({
  router: router,
  object: blueprint.containers[router.params.container_id],
  form: app.blueprints.containers.form,
  update: (form) => {
    blueprint.containers[router.params.container_id] = form;
    return blueprint;
  },
})
