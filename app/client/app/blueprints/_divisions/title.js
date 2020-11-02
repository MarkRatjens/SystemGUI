app.blueprints.title = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.blueprints.title.edit(router, blueprint)
  }
})
