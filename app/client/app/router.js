app.router = () => (a, x) => x.router({
  routes: (router) => [
    app.navbar(router),
    router.mount({
      routes: {
        '/?': app.home,
        '/settings/?*': app.settings,
        "/applications/?*": app.applications,
        "/blueprints/?*": app.blueprints,
        "/resolutions/?*": app.resolutions,
        "/packs/?*": app.packs,
        "/domains/?*": app.domains,
        "/arenas/?*": app.arenas,
        "/system/?*": app.system,
      },
    }),
  ],
  lazy: true,
  transition: 'fade',
  default: (router) =>
    a["p.error"]([
      a.pre(
        `Not found in client routes: ${router.path} in ${
          router.scope || "root"
        }`
      ),
      router,
    ]),
})
