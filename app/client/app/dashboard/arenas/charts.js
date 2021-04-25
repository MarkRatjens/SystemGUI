app.dashboard.arenas.charts = (router) => (a,x) => {

  let arena_id = router.params.arena_id;

  return app.fetch({
    url: '/api/provisioning',
    query: {
      arena_identifier: arena_id,
    },
    success: (provisioning, el) => {

      let urls = provisioning
      .map((provisions) => provisions.split('/')[1])
      // .filter((identifier, index, self) => self.indexOf(identifier) == index)
      .map((identifier) => `/api/resolutions/${identifier}`)

      el.$nodes = [
        app.float({
          right: app.button({
            label: app.icon("fas fa-project-diagram"),
            onclick: (e,el) => {
              arenasCharts.$state = !arenasCharts.$state
            }
          }),
        }),
        app.fetch({
          url: urls,
          success: (resolutions, el) => {

            let n1 = resolutions.length
            let n2 = 2 * resolutions.map(
              (resolution) => (resolution.bindings || []).length
            ).reduce((a, b) => a + b, 0)

            let height = `${100 + n1 * 80 + (n2-n1) * 40}px`

            el.$nodes = a({
              $tag: 'div',
              style: {height: height},
              $nodes: (el) => el.$state ?
              app.dashboard.arenas.charts.mesh(router, resolutions, height) :
              app.dashboard.arenas.charts.tree(router, resolutions, height),
              id: 'arenasCharts',
            })
          },
        }),
      ]
    }
  })

}
