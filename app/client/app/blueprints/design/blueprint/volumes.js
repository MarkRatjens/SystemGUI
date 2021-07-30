app.blueprints.design.blueprint.volumes = (route, blueprint) =>
route.mount({
  routes: {
    '/volumes/?': (route) => app.blueprints.design.blueprint.volumes.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.volumes.preview(route, blueprint),
  }
})
