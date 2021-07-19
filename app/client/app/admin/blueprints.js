app.admin.blueprints = (route) => (a, x) =>
route.mount({
  routes: {
    "/?": app.admin.blueprints.index,
    "/~new": app.admin.blueprints.new,
    "/:blueprintIdentifier/?*": app.admin.blueprints.blueprint,
  }
});
