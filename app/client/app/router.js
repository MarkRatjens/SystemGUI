app.router = () => (a, x) => x.router({
  id: 'router',
  routes: (route) => [
    app.navbar(route),
    a["div.container-fluid"]([
      route.mount({
        routes: {
          '/settings/?*': app.settings,
          '/keys/?*': app.keys,
          '/disconnected': app.disconnected,
          '/reconnect': app.reconnect,
          '/signedout': app.signedout,
          '/timedout': app.timedout,
          '/signin': app.signin,
          '/signout': app.signout,
          '*': app.dashboard,
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
