app.router = () => (a, x) => x.router({
  routes: (router) => [
    app.navbar(router),
    router.mount({
      routes: {
        // '/?': app.dashboard,
        '/settings/?*': app.settings,
        '/admin/?*': app.admin,
        "/dashboard*": app.dashboard,
        "*": app.spaces,
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
