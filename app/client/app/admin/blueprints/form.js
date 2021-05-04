app.admin.blueprints.form = (options={}) => app.jsonForm({
  url: `/api/blueprints/${options.router.params.blueprintIdentifier}`,
  ...options,
})
