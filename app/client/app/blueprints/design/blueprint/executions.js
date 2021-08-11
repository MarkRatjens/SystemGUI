app.blueprints.design.blueprint.executions = (route, blueprint) =>
route.mount({
  routes: {
    '/executions/?': (route) => app.blueprints.design.blueprint.executions.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.executions.preview(route, blueprint),
  }
})
