app.admin.blueprints.specification.modules = (route, specification) =>
route.mount({
  routes: {
    '/modules/?': (route) => app.admin.blueprints.specification.modules.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.modules.preview(route, specification),
  }
})
