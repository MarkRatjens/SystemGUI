app.blueprints.design.files.file = (route) => (a, x) => [
  route.mount({
    routes: {
      '/?': app.blueprints.design.files.edit,
      '/delete': app.blueprints.design.files.delete,
    }
  }),
]
