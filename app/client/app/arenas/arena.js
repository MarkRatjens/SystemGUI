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
      '/assemble': app.arenas.assemble,
      '/resolve': app.arenas.resolve,
      '/pack': app.arenas.pack,
      '/runtime': app.arenas.provision.runtime,
      '/providers': app.arenas.provision.providers,
      '/post-init': app.arenas.provision['post-init'],
      '/init/?': app.arenas.init,
      '/init/output': app.arenas.init.output,
      '/plan/?': app.arenas.plan,
      '/plan/output': app.arenas.plan.output,
      '/apply/?': app.arenas.apply,
      '/apply/output': app.arenas.apply.output,
      '/copy': app.arenas.copy,
      '/delete': app.arenas.delete,
      '/@:blueprintIdentifier/?*': app.arenas.installation,
    }
  }),
])
