app.apps.index = (route) => a['app-apps-index']([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      title: 'New app',
      onclick: () => route.open('new'),
    }),
  ]),
  a['div.border-bottom']([
    a.small('Apps'),
    ' ',
    a['div.d-inline-block']([
      route.mount({
        lazy: false,
        transition: false,
        routes: {
          '*': (route) => a.small(route.params.path ? route.params.path : ''),
        }
      }),
    ]),
  ]),
  route.mount({
    lazy: false,
    routes: {
      '*': app.apps.index.entries,
    }
  }),
])
