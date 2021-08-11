app.blueprints.design.blueprint.ports = (route, blueprint) =>
route.mount({
  routes: {
    '/ports/?': (route) => app.blueprints.design.blueprint.ports.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.ports.preview(route, blueprint),
  }
})
