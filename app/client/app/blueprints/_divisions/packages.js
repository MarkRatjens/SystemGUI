app.blueprints.packages = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.blueprints.packages.edit(router, blueprint)
  }
})
