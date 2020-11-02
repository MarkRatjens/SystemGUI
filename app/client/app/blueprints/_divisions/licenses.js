app.blueprints.licenses = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.blueprints.licenses.edit(router, blueprint)
  }
})
