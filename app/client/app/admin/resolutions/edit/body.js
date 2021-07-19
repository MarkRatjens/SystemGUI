app.admin.resolutions.edit.body = (route, resolution) => route.mount({
  routes: {
    '/?': route => app.admin.resolutions.edit.home(route, resolution),
    '/domain*': route => app.admin.resolutions.domain(route, resolution),
    '/binding': route => app.admin.resolutions.bindings.edit(route, resolution),
    '/bindings*': route => app.admin.resolutions.bindings(route, resolution),
    '/configuration*': route => app.admin.resolutions.configuration(route, resolution),
    '/json*': route => resolution,
  },
  transition: ['fade', {duration: 100}],
})
