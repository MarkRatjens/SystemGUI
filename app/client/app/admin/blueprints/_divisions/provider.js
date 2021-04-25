app.admin.blueprints.provider = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.provider.edit(router, blueprint)
  }
})
