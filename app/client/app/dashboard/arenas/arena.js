app.dashboard.arenas.arena = (router) => (a,x) => a.div([

  router.mount({
    routes: {
      '/?': app.dashboard.arenas.show,
      '/deploy*': app.dashboard.arenas.deploy,
    }
  })
])
