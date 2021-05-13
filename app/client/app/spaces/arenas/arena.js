app.spaces.arenas.arena = (router) => (a,x) => [
  app.close(router),
  a.h1(`${router.params.arenaIdentifier}`),
  a.hr,
  router.mount({
    routes: {
      '/?': app.spaces.arenas.show,
      '/bind': app.admin.arenas.bind,
      '/resolve': app.admin.arenas.resolve,
      '/packing': app.spaces.arenas.packing,
      // '/pack/perform': app.spaces.arenas.pack.perform,
      '/apply': "TODO: app.spaces.arenas.apply",
    }
  })
]
