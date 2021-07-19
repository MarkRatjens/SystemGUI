app.blueprints.design.specification.provider = (route, specification) =>
route.mount({
  routes: {
    '/provider/?': (route) => app.blueprints.design.specification.provider.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.provider.preview(route, specification)
  }
})
