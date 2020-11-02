app.blueprints.os_packages = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.blueprints.os_packages.show(router, blueprint),
    '/adds/?': (router) => app.blueprints.os_packages.adds(router, blueprint),
    '/removes/?': (router) => app.blueprints.os_packages.removes(router, blueprint),
  }
})
