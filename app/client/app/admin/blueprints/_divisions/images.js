app.admin.blueprints.images = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.admin.blueprints.images.index(router, blueprint),
    '/new': (router) => app.admin.blueprints.images.new(router, blueprint),
    '/manage': (router) => app.admin.blueprints.images.manage(router, blueprint),
    '/:image_id*': (router) => app.admin.blueprints.images.edit(router, blueprint),
  }
})
