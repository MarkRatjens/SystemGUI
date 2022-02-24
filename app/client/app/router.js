app.router = () => x.router({
  id: 'router',
  routes: (route) => [
    app.navbar(route),
    app.universeLabel(app.universe.settings.about || {}),
    a["div.container-fluid.mt-1"]([
      route.mount({
        routes: {
          '/?': app.index,
          '/charts': app.charts,
          '/settings/?*': app.settings,
          '/user_keys/?*': app.user_keys,
          '/domains/?*': app.domains,
          '/blueprints/?*': app.blueprints,
          '/arenas/?*': app.arenas,
          '/disconnected': app.disconnected,
          '/reconnect': app.reconnect,
          '/signedout': app.signedout,
          '/timedout': app.timedout,
          '/signin': app.signin,
          '/signout': app.signout,
        },
      }),
      a.br,
    ])
  ],
  lazy: true,
  transition: 'fade',
  default: (route) =>
    a["p.error"]([
      a.pre(
        `Not found in client routes: ${route.path} in ${
          route.scope || "root"
        }`
      ),
      route,
    ]),
})
