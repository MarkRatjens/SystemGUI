app.admin.blueprints.form = (options={}) => app.spaces.form({
  url: `/api/blueprints/${options.router.params.blueprint_id}`,
  ...options,
})
