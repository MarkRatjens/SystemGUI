app.blueprints.design.blueprint.provider = (route, blueprint) =>
route.mount({
  routes: {
    '/provider/?': (route) => app.blueprints.design.blueprint.provider.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.provider.preview(route, blueprint)
  }
})
