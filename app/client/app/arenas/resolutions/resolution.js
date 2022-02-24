app.arenas.resolutions.resolution = (route) => a['app-arenas-resolution']([
  app.arenas.resolutions.blueprint(route),
  route.mount({
    routes: {
      '/?': app.arenas.resolutions.show,
      '/edit': app.arenas.resolutions.edit,
      '/build/?': app.arenas.resolutions.build,
      '/build/output': app.arenas.resolutions.build.output,
      // '/artifact': app.arenas.resolution.artifact,
    },
  }),
])
