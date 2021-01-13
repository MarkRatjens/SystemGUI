app.admin.blueprints.containers = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.admin.blueprints.containers.index(router, blueprint),
    '/new': (router) => app.admin.blueprints.containers.new(router, blueprint),
    '/manage': (router) => app.admin.blueprints.containers.manage(router, blueprint),
    '/:container_id*': (router) => app.admin.blueprints.containers.edit(router, blueprint),
  }
})
