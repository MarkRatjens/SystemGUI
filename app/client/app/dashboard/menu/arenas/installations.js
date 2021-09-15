app.dashboard.menu.arenas.installations = (route, arenaIdentifier) => (a,x) => [
  app.fetch({
    url: '/api/installations/list',
    query: {arena_identifier: arenaIdentifier},
    success: installations => installations.sort().map(installationIdentifier =>
      app.dashboard.menu.arenas.installations.installation(route, installationIdentifier)),
  }),
]
