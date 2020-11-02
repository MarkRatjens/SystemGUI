app.blueprints.description = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.blueprints.description.edit(router, blueprint)
  }
})
