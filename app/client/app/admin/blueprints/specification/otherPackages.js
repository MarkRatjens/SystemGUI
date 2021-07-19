app.admin.blueprints.specification.otherPackages = (route, specification) =>
route.mount({
  routes: {
    '/other_packages/?': (route) => app.admin.blueprints.specification.otherPackages.index(route, specification),
    '/other_packages/new': (route) => app.admin.blueprints.specification.otherPackages.new(route, specification),
    '/other_packages/manage': (route) => app.admin.blueprints.specification.otherPackages.manage(route, specification),
    '/other_packages/:other_package_id*': (route) => app.admin.blueprints.specification.otherPackages.edit(route, specification),
  }
})
