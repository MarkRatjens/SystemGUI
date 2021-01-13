app.admin.blueprints.bindings = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.admin.blueprints.bindings.index(router, blueprint),
    '/new': (router) => app.admin.blueprints.bindings.new(router, blueprint),
    '/arrange': (router) => app.admin.blueprints.bindings.arrange(router, blueprint),
    '/:binding_id*': (router) => app.admin.blueprints.bindings.binding(router, blueprint),
  }
})
