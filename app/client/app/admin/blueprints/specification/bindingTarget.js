app.admin.blueprints.specification.bindingTarget = (route, specification) =>
route.mount({
  routes: {
    '/binding_target/?': (route) => app.admin.blueprints.specification.bindingTarget.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.bindingTarget.preview(route, specification),
  }
})
