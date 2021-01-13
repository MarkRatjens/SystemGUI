app.admin.blueprints.configuration = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.configuration.edit(router, blueprint)
  }
})
