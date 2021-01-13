app.admin.blueprints.other_packages = (router, blueprint) =>
router.mount({
  routes: {
    '/?': (router) => app.admin.blueprints.other_packages.edit(router, blueprint),
  }
})
