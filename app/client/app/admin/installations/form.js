app.admin.installations.form = (options={}) => app.jsonForm({
  url: `/api/installations/${options.route.params.installationIdentifier}`,
  ...options,
})
