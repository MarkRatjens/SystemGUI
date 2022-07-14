app.docker.compositions.menu = (composition) =>
a['app-docker-compositions-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.compositions.actions(composition)),
    }),
    app.docker.compositions.applications(composition),
    // app.docker.compositions.relations(composition),
    app.docker.compositions.info(composition),
    app.docker.compositions.up(composition),
    app.docker.compositions.down(composition),
    app.docker.compositions.delete(composition),
  ]),
])
