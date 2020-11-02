app.blueprints.containers = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.blueprints.containers.index(router, blueprint),
    '/new': (router) => app.blueprints.containers.new(router, blueprint),
    '/manage': (router) => app.blueprints.containers.manage(router, blueprint),
    '/:container_id*': (router) => app.blueprints.containers.edit(router, blueprint),
  }
})
