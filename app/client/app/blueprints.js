app.blueprints = (route) => (a,x) => a['app-blueprints']([
  route.mount({
    routes: {
      '/?': app.blueprints.index,
      '/new': app.blueprints.new,
      '/import': app.blueprints.import,
      '/@:blueprintIdentifier/?*': app.blueprints.blueprint,
    },
  }),
])
