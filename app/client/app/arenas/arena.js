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
      '/?': app.arenas.show,
      '/domain': app.arenas.domain,
      '/blueprints': app.arenas.blueprints,
      '/installations': app.arenas.installations,
      '/resolutions': app.arenas.resolutions,
      '/packs': app.arenas.packs,
      '/runtime': app.arenas.provision.runtime,
      '/providers': app.arenas.provision.providers,
      '/post-init': app.arenas.provision['post-init'],
      '/instruct/?*': app.arenas.instruct,
      '/copy': app.arenas.copy,
      '/delete': app.arenas.delete,
      '/@:blueprintIdentifier/?*': app.arenas.installation,
    }
  }),
])
