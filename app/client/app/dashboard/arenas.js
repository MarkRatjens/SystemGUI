app.dashboard.arenas = (router) => (a, x) => [
  router.mount({
    routes: {
      '/:arena_id*': app.dashboard.arenas.arena,
    }
  }),
];
