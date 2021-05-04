app.dashboard.resolutions.charts = (router) => (a,x) => {

  let resolution_id = router.params.resolution_id;

  return app.fetch({
    url: `/api/resolutions/${resolution_id}/graph`,
    success: (resolution, el) => app.dashboard.resolutions.charts.tree(router, resolution),
  })
}
