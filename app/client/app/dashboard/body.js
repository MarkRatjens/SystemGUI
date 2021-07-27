app.dashboard.body = (route) => (a,x) => a['div.p-1']([
  route.mount({
    routes: {
      '/?': app.dashboard.show,
      '/blueprints/?*': app.blueprints,
      '/arenas/?*': app.arenas,
    },
  }),
])
