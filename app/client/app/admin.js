app.admin = (router) => (a,x) =>
router.mount({
  routes: {
    "/blueprints/?*": app.admin.blueprints,
    "/resolutions/?*": app.admin.resolutions,
    "/packing/?*": app.admin.packing,
    "/provisioning/?*": app.admin.provisioning,
    "/domains/?*": app.admin.domains,
    "/arenas/?*": app.admin.arenas,
    "/?": app.admin.index,
  },
})
