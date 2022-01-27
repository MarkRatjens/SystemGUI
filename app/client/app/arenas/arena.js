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
      '/@:blueprintIdentifier/?*': app.arenas.installation,
      '/edit': app.arenas.edit,
      '/copy': app.arenas.copy,
      '/delete': app.arenas.delete,
      '/domain': app.arenas.domain,
      '/bind': app.arenas.bind,
      '/connect': app.arenas.connect,
      '/resolve': app.arenas.resolve,
      '/pack': app.arenas.pack,
      '/provision': app.arenas.provision,
      '/up/?': app.arenas.up,
      '/up/output': app.arenas.up.output,
      '/?': app.arenas.show,
    }
  }),
])
