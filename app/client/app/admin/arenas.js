app.admin.arenas = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      '/?': app.admin.arenas.index,
      '/~new': app.admin.arenas.new,
      '/:arenaIdentifier*': app.admin.arenas.arena,
    }
  }),
]);
