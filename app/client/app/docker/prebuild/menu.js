app.docker.prebuild.menu = (prebuild) =>
a['app-docker-prebuild-menu']([
  a['div.app-dashboard-item-menu']([
    app.float({
      right: a['div.p-1'](app.docker.prebuild.actions(prebuild)),
    }),
    app.docker.prebuild.build(prebuild),
    app.docker.prebuild.info(prebuild),
  ]),
])
