app.blueprints.design.specification.repositories = (route, specification) =>
route.mount({
  routes: {
    '/repositories/?': (route) => app.blueprints.design.specification.repositories.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.repositories.preview(route, specification),
  }
})
