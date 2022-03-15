app.docker.container.commands = (container) =>
a['app-docker-container-commands']([
  a['div.p-1.app-dashboard-item-commands']([
    app.float({
      right: a.div([
        app.docker.container.instructions(),
        ' ',
        app.docker.container.actions(container),
      ]),
    }),
    app.docker.container.info(container),
    app.docker.container.top(container),
    app.docker.container.log(container),
    app.docker.container.delete(container),
  ])
])
