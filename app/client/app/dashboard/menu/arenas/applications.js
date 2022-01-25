app.dashboard.menu.arenas.applications = (route, arenaIdentifier) => (a,x) => [
  app.fetch({
    url: `/api/applications`,
    query: {arena_identifier: arenaIdentifier},
    success: applications => applications.sort().map(application =>
      app.dashboard.menu.arenas.applications.application(route, application)),
  }),
]
