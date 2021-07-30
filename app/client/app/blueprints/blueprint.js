app.blueprints.blueprint = (route) => (a,x) => a['app-blueprints-blueprint']([
  app.close(route),
  a.h1([
    route.params.blueprintIdentifier,
    route.mount({
      transition: ['fade', {display: 'inline-block'}],
      routes: {
        '/design/?*': () => [a['!']('&nbsp;'), 'design'],
        '*': null,
      }
    }),
  ]),
  route.mount({
    routes: {
      '/reimport': app.blueprints.reimport,
      '/delete': app.blueprints.delete,
      '/design/?*': app.blueprints.design,
      '*': app.blueprints.show,
    }
  }),
])
