app.admin = (router) => (a,x) =>
router.mount({
  routes: {
    "/publications/?*": app.admin.publications,
    "/blueprints/?*": app.admin.blueprints,
    "/resolutions/?*": app.admin.resolutions,
    "/packs/?*": app.admin.packs,
    "/provisioning/?*": app.admin.provisioning,
    "/domains/?*": app.admin.domains,
    "/arenas/?*": app.admin.arenas,
    "/?": app.admin.index,
  },
})
