app.router = () => (a, x) => x.router({
  id: 'router',
  routes: (route) => [
    app.navbar(route),
    route.mount({
      routes: {
        '/settings/?*': app.settings,
        '/disconnected': app.disconnected,
        '/reconnect': app.reconnect,
        '*': app.dashboard,
      },
    }),
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
