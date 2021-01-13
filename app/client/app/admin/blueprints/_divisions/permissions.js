app.admin.blueprints.permissions = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.permissions.edit(router, blueprint)
  }
})
