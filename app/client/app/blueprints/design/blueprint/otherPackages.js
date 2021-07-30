app.blueprints.design.blueprint.otherPackages = (route, blueprint) =>
route.mount({
  routes: {
    '/other_packages/?': (route) => app.blueprints.design.blueprint.otherPackages.index(route, blueprint),
    '/other_packages/new': (route) => app.blueprints.design.blueprint.otherPackages.new(route, blueprint),
    '/other_packages/manage': (route) => app.blueprints.design.blueprint.otherPackages.manage(route, blueprint),
    '/other_packages/:other_package_id*': (route) => app.blueprints.design.blueprint.otherPackages.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.otherPackages.preview(route, blueprint),
  }
})
