app.dashboard.system.charts.topology = (router) => (a,x) => [
  app.fetch({
    url: '/api/arenas',
    success: (arenas, el) => {

      return []
    }
  })
]
