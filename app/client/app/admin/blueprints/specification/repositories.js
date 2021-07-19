app.admin.blueprints.specification.repositories = (route, specification) =>
route.mount({
  routes: {
    '/repositories/?': (route) => app.admin.blueprints.specification.repositories.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.repositories.preview(route, specification),
  }
})
