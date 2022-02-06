app.blueprints.bindings.menu = (route) => (a,x) => {

  let renderMenu = (active) => [
    app.button({
      label: 'Specified',
      onclick: (el) => (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/bindings`),
      class: `btn app-btn${active == 'specified' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Resolved',
      onclick: (el) => (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/bindings/resolved`),
      class: `btn app-btn${active == 'resolved' ? ' active' : ''}`,
    }),
  ]

  return route.mount({
    routes: {
      '/resolved/?*': (route) => renderMenu('resolved'),
      '*': (route) => renderMenu('specified'),
    },
    lazy: false,
    transition: false,
  })

}
