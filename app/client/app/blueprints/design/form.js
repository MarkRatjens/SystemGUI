app.blueprints.design.form = (route) => a.div([
  route.mount({
    routes: {
      '/?': app.blueprints.design.form.show,
      '/edit': app.blueprints.design.form.edit,
    }
  }),
])
