app.blueprints.repositories = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.blueprints.repositories.edit(router, blueprint)
  }
})
