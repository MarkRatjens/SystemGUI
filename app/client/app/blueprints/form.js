app.blueprints.form = (options={}) => app.division.form({
  url: `/api/blueprints/${options.router.params.blueprint_id}`,
  ...options,
})
