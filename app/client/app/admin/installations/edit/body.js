app.admin.installations.edit.body = (route, installation) => route.mount({
  routes: {
    '/?': route => app.admin.installations.edit.home(route, installation),
    '/domain*': route => app.admin.installations.domain(route, installation),
    '/binding': route => app.admin.installations.bindings.edit(route, installation),
    '/bindings*': route => app.admin.installations.bindings(route, installation),
    '/configuration*': route => app.admin.installations.configuration(route, installation),
    '/json*': route => installation,
  },
  transition: ['fade', {duration: 100}],
})
