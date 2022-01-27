app.arenas.arena = (route) => (a,x) => a['app-arenas-arena']([
  app.float({
    left: [
      a['h5.mt-2']([
        route.params.arenaIdentifier,
        ' ',
        route.mount({
          transition: ['fade', {display: 'inline-block'}],
          routes: {
            '/@*': (route) => app.icon('fas fa-angle-right'),
            '*': null,
          },
        }),
        ' ',
        route.mount({
          transition: ['fade', {display: 'inline-block'}],
          routes: {
            '/@:blueprintIdentifier/?*': (route) => route.params.blueprintIdentifier,
            '*': null,
          },
        }),
      ]),
    ],
    right: app.close(route),
  }),
  route.mount({
    routes: {
      '/edit': app.arenas.edit,
      '/copy': app.arenas.copy,
      '/delete': app.arenas.delete,
      '/@:blueprintIdentifier/?*': app.arenas.installation,
      '/domain': app.arenas.domain,
      '/bind': app.arenas.bind,
      '/connect': app.arenas.connect,
      '/installations': app.arenas.installations,
      '/resolve': app.arenas.resolve,
      '/pack': app.arenas.pack,
      '/provision': app.arenas.provision,
      '/runtime': app.arenas.provision.runtime,
      '/providers': app.arenas.provision.providers,
      '/post-init': app.arenas.provision['post-init'],
      '/instructions/?*': app.arenas.instructions,
      '/?': app.arenas.show,
    }
  }),
])
