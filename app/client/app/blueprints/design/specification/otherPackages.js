app.blueprints.design.specification.otherPackages = (route, specification) =>
route.mount({
  routes: {
    '/other_packages/?': (route) => app.blueprints.design.specification.otherPackages.index(route, specification),
    '/other_packages/new': (route) => app.blueprints.design.specification.otherPackages.new(route, specification),
    '/other_packages/manage': (route) => app.blueprints.design.specification.otherPackages.manage(route, specification),
    '/other_packages/:other_package_id*': (route) => app.blueprints.design.specification.otherPackages.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.otherPackages.preview(route, specification),
  }
})
