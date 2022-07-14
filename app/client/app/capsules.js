app.capsules = (route) => a['app-capsules']([
  route.mount({
    routes: {
      '/?': app.capsules.index,
      '/@:capsuleIdentifier/?*': app.capsules.capsule,
    },
  }),
])
