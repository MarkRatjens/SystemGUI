app.arenas = (route) => (a,x) => a['app-arenas']([
  route.mount({
    routes: {
      '/?': app.arenas.index,
      '/new': app.arenas.new,
      '/@:arenaIdentifier/?*': app.arenas.arena,
    },
  }),
])
