app.admin.arenas = (route) => (a, x) => a.div([
  route.mount({
    routes: {
      '/?': app.admin.arenas.index,
      '/~new': app.admin.arenas.new,
      '/:arenaIdentifier*': app.admin.arenas.arena,
    }
  }),
]);
