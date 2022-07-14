app.blueprints.design.blueprint.bundledPackages = (route, blueprint) =>
route.mount({
  routes: {
    '/bundled_packages/?': (route) => app.blueprints.design.blueprint.bundledPackages.index(route, blueprint),
    '/bundled_packages/new': (route) => app.blueprints.design.blueprint.bundledPackages.new(route, blueprint),
    '/bundled_packages/manage': (route) => app.blueprints.design.blueprint.bundledPackages.manage(route, blueprint),
    '/bundled_packages/:bundled_package_id*': (route) => app.blueprints.design.blueprint.bundledPackages.edit(route, blueprint),
    '/?': (route) => app.blueprints.design.blueprint.bundledPackages.preview(route, blueprint),
  }
})
