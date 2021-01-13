app.admin.resolutions.form = (options={}) => app.space.form({
  url: `/api/resolutions/${options.router.params.resolution_id}`,
  ...options,
})
