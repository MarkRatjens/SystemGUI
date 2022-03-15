app.docker.commands = () =>
a['app-docker-commands']([
  a['div.app-dashboard-item-commands']([
    app.float({
      right: a['div.p-1'](app.docker.actions()),
    }),
    app.docker.prebuilds(),
    app.docker.orchestrate(),
    app.docker.info(),
  ])
])
