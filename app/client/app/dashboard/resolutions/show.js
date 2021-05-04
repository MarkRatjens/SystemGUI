app.dashboard.resolutions.show = (router) => (a, x) => {

  return app.fetch({
    url: [
      `/api/resolutions/${router.params.resolution_id}`,
      `/api/resolutions/${router.params.resolution_id}/graph`
    ],
    success: ([resolution, resolutionGraph], el) => [
      a.h1([
        `${router.params.resolution_id}`
      ]),
      app.dashboard.resolutions.chart(router, resolutionGraph),
      app.admin.resolutions.edit.body(router, resolution),
    ],
  })

};
