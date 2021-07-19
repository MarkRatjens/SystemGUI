app.admin.blueprints.specification.permissions = (route, specification) =>
route.mount({
  routes: {
    '/permissions/?': (route) => app.admin.blueprints.specification.permissions.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.permissions.preview(route, specification)
  }
})
