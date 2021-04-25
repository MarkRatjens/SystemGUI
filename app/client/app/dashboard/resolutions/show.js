app.dashboard.resolutions.show = (router) => (a, x) => {

  let blueprint_id = router.params.resolution_id.split('::')[1]

  return app.fetch({
    url: [
      `/api/resolutions/${router.params.resolution_id}`,
      `/api/resolutions/${router.params.resolution_id}/graph`
    ],
    success: ([resolution, resolutionGraph], el) => [
      a.h1([
        // a.img(a._, {
        //   src: `/api/blueprints/${blueprint_id}/icon`,
        //   height: 48, width: 48
        // }),
        // ' ',
        `${router.params.resolution_id}`
      ]),
      app.dashboard.resolutions.chart(router, resolutionGraph),
      app.admin.resolutions.edit.body(router, resolution),
    ],
  })

};
