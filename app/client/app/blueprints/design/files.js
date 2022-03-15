app.blueprints.design.files = (route) => a.div([
  route.mount({
    routes: {
      '/?': app.blueprints.design.files.index,
      '/new': app.blueprints.design.files.new,
      '/@:fileIdentifier/?*': app.blueprints.design.files.file,
    }
  }),
])
