app.admin.blueprints.bindings = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.admin.blueprints.bindings.index(router, blueprint),
    '/new': (router) => app.admin.blueprints.bindings.new(router, blueprint),
    '/new/:target': (router) => app.admin.blueprints.bindings.new.target(router, blueprint),
    '/manage': (router) => app.admin.blueprints.bindings.manage(router, blueprint),
    '/:bindingIndex*': (router) => app.admin.blueprints.bindings.edit(router, blueprint),
  }
})
