app.blueprints.blueprint = (route) => a.div([
//   app.panes({
//     proximate: app.blueprints.blueprint.menu(route),
//     adjacent: app.blueprints.show(route),
//   }),
// ])
//
//
//
//
//
// app.blueprints.blueprint.body = (route) => a['app-blueprints-blueprint']([
  app.float({
    left: [
      a['h5.mt-2']([
        route.params.blueprintIdentifier,
        route.mount({
          transition: ['fade', {display: 'inline-block'}],
          routes: {
            '/design/?*': () => a['!']('&nbsp;design'),
            '*': '',
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
      '/design/location': '',
      '*': app.blueprints.location,
    }
  }),
  route.mount({
    routes: {
      '/reimport/?': app.blueprints.reimport,
      '/reimport/output': app.blueprints.reimport.output,
      '/delete': app.blueprints.delete,
      '/design/?*': app.blueprints.design,
      '*': app.blueprints.show,
    }
  }),
])
