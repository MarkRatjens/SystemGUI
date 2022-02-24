app.blueprints.design.files.file = (route) => a.div([
  route.mount({
    routes: {
      '/?': app.blueprints.design.files.edit,
      '/delete': app.blueprints.design.files.delete,
    }
  }),
])
