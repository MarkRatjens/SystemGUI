app.dashboard = (route) => a['app-dashboard']([
  app.panes({
    proximate: app.dashboard.menu(route),
    adjacent: app.dashboard.body(route),
  }),
])
