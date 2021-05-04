app.admin.resolutions.form = (options={}) => app.jsonForm({
  url: `/api/resolutions/${options.router.params.resolutionIdentifier}`,
  ...options,
})
