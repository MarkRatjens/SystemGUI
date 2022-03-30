app.docker.composition.application.menu = (application) =>
a['app-docker-composition-application-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.composition.application.actions(application)),
    }),
    app.docker.composition.application.edit(application),
    app.docker.composition.application.info(application),
    app.docker.composition.application.delete(application),
  ]),
])
