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
      // '/edit': app.arenas.edit,
      '/configuration': app.arenas.configuration,
      '/domain': app.arenas.domain,
      '/bindings': app.arenas.bindings,
      '/assemble': app.arenas.assemble,
      '/resolve': app.arenas.resolve,
      '/pack': app.arenas.pack,
      '/runtime': app.arenas.provision.runtime,
      '/providers': app.arenas.provision.providers,
      '/post-init': app.arenas.provision['post-init'],
      '/init': app.arenas.init,
      '/plan': app.arenas.plan,
      '/apply': app.arenas.apply,
      '/delete': app.arenas.delete,
      '/@:blueprintIdentifier/?*': app.arenas.installation,
    }
  }),
])
