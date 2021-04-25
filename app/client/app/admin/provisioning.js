app.admin.provisioning = (router) => router.mount({
  routes: {
    '/?': app.admin.provisioning.index,
    // '/~new': app.admin.provisioning.new,
    '/:resolution_id*': app.admin.provisioning.provisions,
  }
})
