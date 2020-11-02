app.blueprints.modules = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.blueprints.modules.edit(router, blueprint)
  }
})
