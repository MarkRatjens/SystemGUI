app.admin.blueprints.repositories = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.repositories.edit(router, blueprint)
  }
})
