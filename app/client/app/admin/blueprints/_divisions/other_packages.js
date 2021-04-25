app.admin.blueprints.other_packages = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.admin.blueprints.other_packages.index(router, blueprint),
    '/new': (router) => app.admin.blueprints.other_packages.new(router, blueprint),
    '/manage': (router) => app.admin.blueprints.other_packages.manage(router, blueprint),
    '/:other_package_id*': (router) => app.admin.blueprints.other_packages.edit(router, blueprint),
  }
})
