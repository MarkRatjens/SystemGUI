app.admin.blueprints.specification.bindings = (route, specification) =>
route.mount({
  routes: {
    '/?': (route) => app.admin.blueprints.specification.bindings.preview(route, specification),
    '/bindings/?': (route) => app.admin.blueprints.specification.bindings.index(route, specification),
    '/bindings/new': (route) => app.admin.blueprints.specification.bindings.new(route, specification),
    '/bindings/new/:target': (route) => app.admin.blueprints.specification.bindings.new.target(route, specification),
    '/bindings/manage': (route) => app.admin.blueprints.specification.bindings.manage(route, specification),
    '/bindings/:bindingIndex*': (route) => app.admin.blueprints.specification.bindings.edit(route, specification),
  }
})
