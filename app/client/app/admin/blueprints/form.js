app.admin.blueprints.form = (options={}) => app.space.form({
  url: `/api/blueprints/${options.router.params.blueprint_id}`,
  ...options,
})
