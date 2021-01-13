app.admin.blueprints.containers.edit = (router, blueprint) =>
app.admin.blueprints.form({
  router: router,
  object: blueprint.containers[router.params.container_id],
  form: app.admin.blueprints.containers.form,
  update: (form) => {
    blueprint.containers[router.params.container_id] = form;
    return blueprint;
  },
})
