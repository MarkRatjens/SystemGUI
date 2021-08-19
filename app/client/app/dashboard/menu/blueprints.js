app.dashboard.menu.blueprints = (route) => (a,x) => app.fetch({
  url: '/api/blueprints/list',
  placeholder: a['div.p-2'](app.spinner("Loading blueprints")),
  success: (blueprints =>
    a['app-menu-buttons']([
      blueprints.sort().map(
        identifier => a.div(
          app.dashboard.menu.blueprints.blueprint(route, identifier)
        ),
      ),
    ])
  ),
}),
