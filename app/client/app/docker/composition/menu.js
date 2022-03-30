app.docker.composition.menu = (composition) =>
a['app-docker-composition-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.composition.actions(composition)),
    }),
    app.docker.composition.applications(composition),
    app.docker.composition.relations(composition),
    app.docker.composition.info(composition),
    app.docker.composition.up(composition),
    app.docker.composition.down(composition),
    app.docker.composition.delete(composition),
  ]),
])
