app.docker.prebuilds.menu = (prebuild) =>
a['app-docker-prebuilds-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.prebuilds.actions(prebuild)),
    }),
    app.docker.prebuilds.build(prebuild),
    app.docker.prebuilds.info(prebuild),
  ]),
])
