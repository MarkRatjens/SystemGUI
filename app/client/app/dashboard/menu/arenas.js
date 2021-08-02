app.dashboard.menu.arenas = (route) => (a,x) => app.fetch({
  url: '/api/arenas',
  placeholder: a['div.p-2'](app.spinner("Loading arenas")),
  success: (arenas =>
    a['app-menu-buttons']([
      arenas.map(
        arena => a.p(
          app.dashboard.menu.arenas.arena(route, arena)
        ),
      ),
    ])
  ),
})
