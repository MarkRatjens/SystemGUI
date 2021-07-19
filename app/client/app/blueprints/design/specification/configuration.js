app.blueprints.design.specification.configuration = (route, specification) =>
route.mount({
  routes: {
    '/configuration/?': (route) => app.blueprints.design.specification.configuration.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.configuration.preview(route, specification),
  }
})
