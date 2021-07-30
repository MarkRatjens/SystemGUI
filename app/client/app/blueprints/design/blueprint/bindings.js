app.blueprints.design.blueprint.bindings = (route, blueprint) =>
route.mount({
  routes: {
    '/?': (route) => app.blueprints.design.blueprint.bindings.preview(route, blueprint),
    '/bindings/?': (route) => app.blueprints.design.blueprint.bindings.index(route, blueprint),
    '/bindings/new': (route) => app.blueprints.design.blueprint.bindings.new(route, blueprint),
    '/bindings/new/:target': (route) => app.blueprints.design.blueprint.bindings.new.target(route, blueprint),
    '/bindings/manage': (route) => app.blueprints.design.blueprint.bindings.manage(route, blueprint),
    '/bindings/:bindingIndex*': (route) => app.blueprints.design.blueprint.bindings.edit(route, blueprint),
  }
})
