app.dashboard.system.charts = (router) => (a,x) => {

  // let unique = (array) => [...new Set(array)]

  return [
    // app.fetch({
    //   url: '/api/resolutions',
    //   placeholder: app.spinner('Loading resolutions'),
    //   success: (resolutions, el) => {
    //
    //     let urls = resolutions
    //     .map((resolution_identifier) => `/api/resolutions/${resolution_identifier}`)
    //
    //     el.$nodes = [
    //       app.fetch({
    //         url: urls,
    //         placeholder: app.spinner('Loading resolutions'),
    //         success: (resolutions, el) => [
    //           app.dashboard.system.charts.tree(
    //             router, resolutions
    //           ),
    //           resolutions
    //         ],
    //       }),
    //     ]
    //   }
    // }),

    app.dashboard.system.charts.topology(router),

    // app.clickable(
    //   app.dashboard.system.charts.networkOverview(router),
    //   () => router.open('network'),
    // ),
  ]

}
