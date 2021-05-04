app.spaces.blueprints = (router) => (a, x) =>
router.mount({
  routes: {
    '/?': app.spaces.blueprints.index,
    '/~import': app.spaces.blueprints.import,
    '/:blueprintIdentifier/?': app.spaces.blueprints.show,
    '/:blueprintIdentifier/bind': app.spaces.blueprints.bind,
    '/:blueprintIdentifier/edit': app.spaces.blueprints.edit,
  },
}),
