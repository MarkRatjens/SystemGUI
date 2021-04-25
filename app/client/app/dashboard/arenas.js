app.dashboard.arenas = (router) => (a, x) => a.div([
  router.mount({
    routes: {
      '/~new': app.dashboard.arenas.new,
      '/:arena_id*': app.dashboard.arenas.arena,
    }
  }),
]);
