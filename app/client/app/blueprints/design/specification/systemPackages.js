app.blueprints.design.specification.systemPackages = (route, specification) =>
route.mount({
  routes: {
    '/system_packages/?': (route) => app.blueprints.design.specification.systemPackages.edit(route, specification),
    '/?': (route) => app.blueprints.design.specification.systemPackages.preview(route, specification),
  }
})
