app.admin.blueprints.modules = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.modules.edit(router, blueprint)
  }
})
