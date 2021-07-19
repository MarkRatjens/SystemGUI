app.admin.blueprints.specification.provider = (route, specification) =>
route.mount({
  routes: {
    '/provider/?': (route) => app.admin.blueprints.specification.provider.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.provider.preview(route, specification)
  }
})
