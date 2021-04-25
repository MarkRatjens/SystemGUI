app.dashboard.resolutions.charts = (router) => (a,x) => {

  let resolution_id = router.params.resolution_id;

  return app.fetch({
    url: `/api/resolutions/${resolution_id}/graph`,
    success: (resolution, el) => app.dashboard.resolutions.charts.tree(router, resolution),
    // xxxsuccess: (resolution_graph, el) => {
    //   let arena_identifier = resolution_id.split('::')[0]
    //   let binding_target_identifiers = resolution.bindings.map((binding) => `${arena_identifier}::${binding.target_identifier}`)
    //   let urls = [resolution_id, ...binding_target_identifiers]
    //   .map((identifier) => `/api/resolutions/${identifier}`)
    //   el.$nodes = [
    //     app.fetch({
    //       url: urls,
    //     }),
    //   ]
    // }
  })
}
