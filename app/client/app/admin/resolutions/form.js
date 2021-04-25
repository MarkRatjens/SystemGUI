app.admin.resolutions.form = (options={}) => app.spaces.form({
  url: `/api/resolutions/${options.router.params.resolution_id}`,
  ...options,
})
