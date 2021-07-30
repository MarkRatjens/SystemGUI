app.blueprints.design.blueprint.bindingTarget = (route, blueprint) =>
route.mount({
  routes: {
    '/binding_target/?': (route) => app.blueprints.design.blueprint.bindingTarget.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.bindingTarget.preview(route, blueprint),
  }
})
