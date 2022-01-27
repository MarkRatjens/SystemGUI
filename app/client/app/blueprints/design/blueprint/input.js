app.blueprints.design.blueprint.input = (route, blueprint) =>
route.mount({
  routes: {
    '/input/?': (route) => app.blueprints.design.blueprint.input.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.input.preview(route, blueprint),
  }
})
