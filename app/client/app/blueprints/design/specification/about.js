app.blueprints.design.specification.about = (route, specification) => (a, x) => a['#app-blueprint-about'](
  route.mount({
    routes: {
      '/about': route => app.blueprints.design.specification.about.edit(route, specification),
      '/?': route => app.blueprints.design.specification.about.preview(route, specification),
    }
  })
)
