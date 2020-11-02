app.resolutions.form = (options={}) => app.division.form({
  url: `/api/resolutions/${options.router.params.resolution_id}`,
  ...options,
})
