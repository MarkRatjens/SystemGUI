app.admin.blueprints.licenses = (router, blueprint) =>
router.mount({
  routes: {
    '*': (router) => app.admin.blueprints.licenses.edit(router, blueprint)
  }
})
