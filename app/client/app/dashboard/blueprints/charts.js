app.dashboard.blueprints.charts = (router) => (a,x) => {

  let blueprint_id = router.params.blueprint_id;

  return app.http({
    url: `/api/blueprints/${blueprint_id}/turtles`,
    success: (turtles, el) => {

      let urls = [blueprint_id, ...turtles]
      .map((identifier) => `/api/resolutions/${identifier}`)

      el.$nodes = [
        app.http({
          url: urls,
          success: (resolutions, el) => {

            el.$nodes = app.dashboard.blueprints.charts.tree(
              router, resolutions
            )

          },
        }),
      ]
    }
  })

}
