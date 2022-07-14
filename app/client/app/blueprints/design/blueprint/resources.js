app.blueprints.design.blueprint.resources = (route, blueprint) =>
route.mount({
  routes: {
    '/?': (route) => app.blueprints.design.blueprint.resources.preview(route, blueprint),
    '/resources/?': (route) => app.blueprints.design.blueprint.resources.index(route, blueprint),
    '/resources/new': (route) => app.blueprints.design.blueprint.resources.new(route, blueprint),
    '/resources/manage': (route) => app.blueprints.design.blueprint.resources.manage(route, blueprint),
    '/resources/:resource_id*': (route) => app.blueprints.design.blueprint.resources.edit(route, blueprint),
  }
})
