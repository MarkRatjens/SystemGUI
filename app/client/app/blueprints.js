app.blueprints = (route) => a['app-blueprints']([
  route.mount({
    routes: {
      '/?': app.blueprints.index,
      '/new': app.blueprints.new,
      '/import/?': app.blueprints.import,
      '/import/identify': app.blueprints.import.identify,
      '/import/output': app.blueprints.import.output,
      '/@:blueprintIdentifier/?*': app.blueprints.blueprint,
    },
  }),
])
