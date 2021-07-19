app.admin = (route) => (a,x) =>
route.mount({
  routes: {
    "/publications/?*": app.admin.publications,
    "/blueprints/?*": app.admin.blueprints,
    "/resolutions/?*": app.admin.resolutions,
    "/installations/?*": app.admin.installations,
    "/packs/?*": app.admin.packs,
    "/provisioning/?*": app.admin.provisioning,
    "/domains/?*": app.admin.domains,
    "/arenas/?*": app.admin.arenas,
    "/?": app.admin.index,
  },
})
