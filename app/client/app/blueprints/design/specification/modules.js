app.blueprints.design.specification.modules = (route, specification) =>
route.mount({
  routes: {
    '/modules/?': (route) => app.blueprints.design.specification.modules.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.modules.preview(route, specification),
  }
})
