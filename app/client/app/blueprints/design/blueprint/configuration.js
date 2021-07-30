app.blueprints.design.blueprint.configuration = (route, blueprint) =>
route.mount({
  routes: {
    '/configuration/?': (route) => app.blueprints.design.blueprint.configuration.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.configuration.preview(route, blueprint),
  }
})
