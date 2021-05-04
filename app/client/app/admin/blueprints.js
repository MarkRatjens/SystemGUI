app.admin.blueprints = (router) => (a, x) =>
router.mount({
  routes: {
    "/?": app.admin.blueprints.index,
    "/~new": app.admin.blueprints.new,
    "/:blueprintIdentifier*": app.admin.blueprints.blueprint,
  }
});
