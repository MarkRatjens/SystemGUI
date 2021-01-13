app.admin.blueprints.description = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.description.edit(router, blueprint)
  }
})
