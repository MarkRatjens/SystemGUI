app.blueprints.design.form = (route) => (a, x) => [
  route.mount({
    routes: {
      '/?': app.blueprints.design.form.show,
      '/edit': app.blueprints.design.form.edit,
    }
  }),
]
