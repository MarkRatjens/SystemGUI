app.blueprints.design.blueprint.service_tasks = (route, blueprint) =>
route.mount({
  routes: {
    '/service_tasks/?': (route) => app.blueprints.design.blueprint.service_tasks.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.service_tasks.preview(route, blueprint),
  }
})
