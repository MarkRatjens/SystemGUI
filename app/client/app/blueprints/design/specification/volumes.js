app.blueprints.design.specification.volumes = (route, specification) =>
route.mount({
  routes: {
    '/volumes/?': (route) => app.blueprints.design.specification.volumes.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.volumes.preview(route, specification),
  }
})
