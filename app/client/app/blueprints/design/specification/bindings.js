app.blueprints.design.specification.bindings = (route, specification) =>
route.mount({
  routes: {
    '/?': (route) => app.blueprints.design.specification.bindings.preview(route, specification),
    '/bindings/?': (route) => app.blueprints.design.specification.bindings.index(route, specification),
    '/bindings/new': (route) => app.blueprints.design.specification.bindings.new(route, specification),
    '/bindings/new/:target': (route) => app.blueprints.design.specification.bindings.new.target(route, specification),
    '/bindings/manage': (route) => app.blueprints.design.specification.bindings.manage(route, specification),
    '/bindings/:bindingIndex*': (route) => app.blueprints.design.specification.bindings.edit(route, specification),
  }
})
