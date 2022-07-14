app.blueprints.design.blueprint.dimensions = (route, blueprint) =>
route.mount({
  routes: {
    '/dimensions/?': (route) => app.blueprints.design.blueprint.dimensions.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.dimensions.preview(route, blueprint)
  }
})
