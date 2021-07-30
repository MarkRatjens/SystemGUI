app.blueprints.design.blueprint.repositories = (route, blueprint) =>
route.mount({
  routes: {
    '/repositories/?': (route) => app.blueprints.design.blueprint.repositories.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.repositories.preview(route, blueprint),
  }
})
