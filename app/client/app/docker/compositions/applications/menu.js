app.docker.compositions.applications.menu = (application) =>
a['app-docker-compositions-applications-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.compositions.applications.actions(application)),
    }),
    app.docker.compositions.applications.edit(application),
    app.docker.compositions.applications.info(application),
    app.docker.compositions.applications.delete(application),
  ]),
])
