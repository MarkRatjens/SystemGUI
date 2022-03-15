app.arenas.resolutions.resolution = (route) => a['app-arenas-resolution']([
  app.arenas.resolutions.blueprint(route),
  route.mount({
    routes: {
      '/?': app.arenas.resolutions.show,
      '/edit': app.arenas.resolutions.edit,
      '/prebuild/?': app.arenas.resolutions.prebuild,
      '/prebuild/output': app.arenas.resolutions.prebuild.output,
      // '/artifact': app.arenas.resolution.artifact,
    },
  }),
])
