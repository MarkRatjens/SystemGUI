app.admin.blueprints.specification.about = (route, specification) => (a, x) => a['#app-blueprint-about'](
  route.mount({
    routes: {
      '/about': route => app.admin.blueprints.specification.about.edit(route, specification),
      '/?': route => app.admin.blueprints.specification.about.preview(route, specification),
    }
  })
)
