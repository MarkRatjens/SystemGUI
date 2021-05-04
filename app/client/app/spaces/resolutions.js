app.spaces.resolutions = (router) => (a, x) =>
router.mount({
  routes: {
    '/?': app.spaces.resolutions.index,
    '/:resolutionIdentifier/?*': app.spaces.resolutions.show,
  },
}),
