app.blueprints.images = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.blueprints.images.index(router, blueprint),
    '/new': (router) => app.blueprints.images.new(router, blueprint),
    '/manage': (router) => app.blueprints.images.manage(router, blueprint),
    '/:image_id*': (router) => app.blueprints.images.edit(router, blueprint),
  }
})
