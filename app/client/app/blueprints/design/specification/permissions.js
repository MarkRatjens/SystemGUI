app.blueprints.design.specification.permissions = (route, specification) =>
route.mount({
  routes: {
    '/permissions/?': (route) => app.blueprints.design.specification.permissions.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.permissions.preview(route, specification)
  }
})
