app.admin.blueprints.system_packages = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.admin.blueprints.system_packages.edit(router, blueprint),
    // '/adds/?': (router) => app.admin.blueprints.system_packages.adds(router, blueprint),
    // '/removes/?': (router) => app.admin.blueprints.system_packages.removes(router, blueprint),
  }
})
