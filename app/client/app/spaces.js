app.spaces = (router) => (a, x) =>
router.mount({
  routes: {
    '/?': app.spaces.show,
    '/arenas/?*': app.spaces.arenas,
    '/blueprints/?*': app.spaces.blueprints,
    '/resolutions/?*': app.spaces.resolutions,
  },
}),
