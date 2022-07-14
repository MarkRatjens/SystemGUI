app.arenas = (route) => a['app-arenas']([
  route.mount({
    routes: {
      '/?': app.arenas.index,
      '/new': app.arenas.new,
      '/images/?*': app.images,
      '/capsules/?*': app.capsules,
      '/@:arenaIdentifier/?*': app.arenas.arena,
    },
  }),
])
