app.docker.prebuild.commands = (prebuild) =>
a['app-docker-prebuild-commands']([
  a['div.p-1.app-dashboard-item-commands']([
    app.float({
      right: app.docker.prebuild.actions(prebuild),
    }),
    app.docker.prebuild.build(prebuild),
    app.docker.prebuild.info(prebuild),
  ])
])
