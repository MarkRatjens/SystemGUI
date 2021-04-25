app.admin.blueprints = (router) => (a, x) =>
router.mount({
  routes: {
    "/?": app.admin.blueprints.index,
    "/~new": app.admin.blueprints.new,
    "/:blueprint_id*": app.admin.blueprints.blueprint,
  }
});
