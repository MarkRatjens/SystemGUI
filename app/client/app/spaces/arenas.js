app.spaces.arenas = (router) => (a, x) =>
router.mount({
  routes: {
    '/?': app.spaces.arenas.index,
    '/~new': app.spaces.arenas.new,
    '/:arenaIdentifier/?': app.spaces.arenas.show,
    '/:arenaIdentifier/bind': app.spaces.arenas.bind,
  },
}),
