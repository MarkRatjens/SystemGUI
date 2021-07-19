app.admin.resolutions.form = (options={}) => app.jsonForm({
  url: `/api/resolutions/${options.route.params.resolutionIdentifier}`,
  ...options,
})
