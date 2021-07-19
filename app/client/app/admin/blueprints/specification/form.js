app.admin.blueprints.specification.form = (options={}) => app.jsonForm({
  url: `/api/blueprints/${options.route.params.blueprintIdentifier}/specification`,
  ...options,
})
