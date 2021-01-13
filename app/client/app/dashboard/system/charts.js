app.dashboard.system.charts = (router) => (a,x) => {

  let unique = (array) => [...new Set(array)]

  return [

    app.http({
      url: [
        '/api/arenas',
        '/api/provisioning',
      ],
      placeholder: app.spinner('Loading arenas'),
      success: ([arenas, provisioning], el) => {

        let urls = unique(
          provisioning
          .map((provisions) => provisions.split('/')[1])
          .map((identifier) => `/api/resolutions/${identifier}`)
        )

        el.$nodes = [
          app.http({
            url: urls,
            placeholder: app.spinner('Loading resolutions'),
            success: (resolutions, el) => {

              el.$nodes = [
                app.dashboard.system.charts.tree(
                  router, arenas, provisioning, resolutions
                ),
              ]

            },
          }),
        ]
      }
    }),


    app.clickable(
      app.dashboard.system.charts.networkOverview(router),
      () => router.open('network'),
    ),
  ]

}
