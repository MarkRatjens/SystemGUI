app.blueprints.design.blueprint.serviceTasks = (route, blueprint) =>
route.mount({
  routes: {
    '/service_tasks/?': (route) => app.blueprints.design.blueprint.serviceTasks.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.serviceTasks.preview(route, blueprint),
  }
})
