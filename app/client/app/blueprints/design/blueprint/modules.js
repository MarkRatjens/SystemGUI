app.blueprints.design.blueprint.modules = (route, blueprint) =>
route.mount({
  routes: {
    '/modules/?': (route) => app.blueprints.design.blueprint.modules.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.modules.preview(route, blueprint),
  }
})
