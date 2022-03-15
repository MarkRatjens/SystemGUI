app.arenas.arena = (route) => a['app-arenas-arena']([
  app.float({
    left: a['h5.mt-2']([
      route.params.arenaIdentifier,
      ' ',
      route.mount({
        transition: ['fade', {display: 'inline-block'}],
        routes: {
          '/@*': (route) => app.icon('fas fa-angle-right'),
          '*': '',
        },
      }),
      ' ',
      route.mount({
        transition: ['fade', {display: 'inline-block'}],
        routes: {
          '/@:blueprintIdentifier/?*': (route) => route.params.blueprintIdentifier,
          '*': '',
        },
      }),
    ]),
    right: app.close(route),
  }),
  route.mount({
    routes: {
      '/@:blueprintIdentifier/?*': app.arenas.resolutions.resolution,
      '/edit': app.arenas.edit,
      '/copy': app.arenas.copy,
      '/delete': app.arenas.delete,
      '/domains': app.arenas.domains,
      '/bind': app.arenas.bind,
      '/connect': app.arenas.connect,
      '/resolve': app.arenas.resolve,
      '/pack': app.arenas.pack,
      '/provision': app.arenas.provision,
      '/orchestrate/?': app.arenas.orchestrate,
      '/orchestrate/output': app.arenas.orchestrate.output,
      '*': app.arenas.show,
    }
  }),
])
