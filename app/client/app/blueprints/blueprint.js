app.blueprints.blueprint = (route) => (a,x) => a['app-blueprints-blueprint']([
  app.float({
    left: [
      a['h5.mt-2']([
        route.params.blueprintIdentifier,
        route.mount({
          transition: ['fade', {display: 'inline-block'}],
          routes: {
            '/design/?*': () => [a['!']('&nbsp;'), 'design'],
            '*': null,
          }
        }),
      ]),
    ],
    right: [
      app.close(route),

    ],
  }),
  route.mount({
    routes: {
      '/design/location': null,
      '*': app.blueprints.location,
    }
  }),
  route.mount({
    routes: {
      '/reimport': app.blueprints.reimport,
      '/delete': app.blueprints.delete,
      '/design/?*': app.blueprints.design,
      '*': app.blueprints.show,
    }
  }),
])
