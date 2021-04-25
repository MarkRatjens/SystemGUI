app.admin.resolutions.edit.body = (router, resolution) => router.mount({
  routes: {
    '/?': router => app.admin.resolutions.edit.home(router, resolution),
    '/domain*': router => app.admin.resolutions.domain(router, resolution),
    '/binding': router => app.admin.resolutions.bindings.edit(router, resolution),
    '/bindings*': router => app.admin.resolutions.bindings(router, resolution),
    '/configuration*': router => app.admin.resolutions.configuration(router, resolution),
    '/json*': router => resolution,
  },
  transition: ['fade', {duration: 100}],
})
