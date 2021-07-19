app.admin.blueprints.specification.volumes = (route, specification) =>
route.mount({
  routes: {
    '/volumes/?': (route) => app.admin.blueprints.specification.volumes.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.volumes.preview(route, specification),
  }
})
