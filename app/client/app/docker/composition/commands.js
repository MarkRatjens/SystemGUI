app.docker.composition.commands = (composition) =>
a['app-docker-composition-commands']([
  a['div.p-1.app-dashboard-item-commands']([
    app.float({
      right: app.docker.composition.actions(composition),
    }),
    app.docker.composition.info(composition),
    app.docker.composition.up(composition),
    app.docker.composition.down(composition),
    app.docker.composition.delete(composition),
  ])
])
