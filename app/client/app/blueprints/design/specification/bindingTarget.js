app.blueprints.design.specification.bindingTarget = (route, specification) =>
route.mount({
  routes: {
    '/binding_target/?': (route) => app.blueprints.design.specification.bindingTarget.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.bindingTarget.preview(route, specification),
  }
})
