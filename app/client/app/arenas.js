app.arenas = (router) => (a, x) => [
  router.mount({
    routes: {
      '/?': app.arenas.index,
      '/~new': app.arenas.new,
      '/:arena_id*': app.arenas.arena,
    }
  }),
];
