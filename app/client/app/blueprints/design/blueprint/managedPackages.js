app.blueprints.design.blueprint.managedPackages = (route, blueprint) =>
route.mount({
  routes: {
    '/managed_packages/?': (route) => app.blueprints.design.blueprint.managedPackages.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.managedPackages.preview(route, blueprint),
  }
})
