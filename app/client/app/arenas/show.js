app.arenas.show = (route) => a['app-arenas-arena-show']([

  // app.fetch({
  //   url: `/api/arenas/@${route.params.arenaIdentifier}`,
  //   placeholder: app.spinner(`Loading arena`),
  //   success: (arena) =>
  //     app.arenas.show.sink(route, arena, state, resolutions),
  //     app.arenas.providers(route, arena),
  // }),


  app.fetch({
    url: [
      `/api/arenas/@${route.params.arenaIdentifier}`,
      `/api/arenas/@${route.params.arenaIdentifier}/state`,
      // `/api/arenas/@${route.params.arenaIdentifier}/relations`,
      `/api/resolutions/list`,
    ],
    query: [
      {}, {}, {arena_identifier: route.params.arenaIdentifier}
    ],
    placeholder: app.spinner(`Loading arena`),
    success: ([arena, state, resolutions]) =>
      app.arenas.show.sink(route, arena, state, resolutions),
  }),
])
