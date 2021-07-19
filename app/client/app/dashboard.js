app.dashboard = (route) => (a,x) => a['app-dashboard']([

  app.panes({
    proximate: app.dashboard.menu(route),
    adjacent: app.dashboard.body(route),
  }),


  // route.mount({
  //   routes: {
  //     '*': app.dashboard.show,
  //     // '/configuration*': app.dashboard.configuration,
  //     // '/arenas*': app.dashboard.arenas,
  //     // '/installations*': app.dashboard.installations,
  //     // '/resolutions*': app.dashboard.resolutions,
  //   },
  // })
])
