app.blueprints.design.blueprint.systemPackages = (route, blueprint) =>
route.mount({
  routes: {
    '/system_packages/?': (route) => app.blueprints.design.blueprint.systemPackages.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.systemPackages.preview(route, blueprint),
  }
})
