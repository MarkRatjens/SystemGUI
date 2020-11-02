app.blueprints.bindings = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.blueprints.bindings.index(router, blueprint),
    '/new': (router) => app.blueprints.bindings.new(router, blueprint),
    '/manage': (router) => app.blueprints.bindings.manage(router, blueprint),
    '/:binding_id*': (router) => app.blueprints.bindings.binding(router, blueprint),
  }
})
