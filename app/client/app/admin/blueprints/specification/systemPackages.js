app.admin.blueprints.specification.systemPackages = (route, specification) =>
route.mount({
  routes: {
    '/system_packages/?': (route) => app.admin.blueprints.specification.systemPackages.edit(route, specification),
    '/?': (route) => app.admin.blueprints.specification.systemPackages.preview(route, specification),
  }
})
