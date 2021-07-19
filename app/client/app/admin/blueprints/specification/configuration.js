app.admin.blueprints.specification.configuration = (route, specification) =>
route.mount({
  routes: {
    '/configuration/?': (route) => app.admin.blueprints.specification.configuration.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.configuration.preview(route, specification),
  }
})
