app.dashboard.menu.arenas.resolutions = (route, arenaIdentifier) => a['app-menu-resolutions']([
  app.fetch({
    url: '/api/resolutions/index',
    query: {arena_identifier: arenaIdentifier},
    success: resolutions => a.div(resolutions.sort().map(resolutionIdentifier =>
      app.dashboard.menu.arenas.resolutions.resolution(route, resolutionIdentifier))),
  }),
])
