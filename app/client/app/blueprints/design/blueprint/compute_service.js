app.blueprints.design.blueprint.compute_service = (route, blueprint) =>
route.mount({
  routes: {
    '/compute_service/?': (route) => app.blueprints.design.blueprint.compute_service.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.compute_service.preview(route, blueprint)
  }
})
