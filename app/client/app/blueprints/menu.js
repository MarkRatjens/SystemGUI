app.blueprints.menu = (route) => (a,x) => {

  let renderMenu = (active) => [
    app.button({
      label: 'Readme',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}`),
      class: `btn app-btn${active == 'readme' ? ' active' : ''}`,
    }),
    app.button({
      label: 'License',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/license`),
      class: `btn app-btn${active == 'license' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Bindings',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/bindings`),
      class: `btn app-btn${active == 'bindings' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Relations',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/relations`),
      class: `btn app-btn${active == 'relations' ? ' active' : ''}`,
    }),
  ]

  return route.mount({
    routes: {
      '/license/?*': (route) => renderMenu('license'),
      '/bindings/?*': (route) => renderMenu('bindings'),
      '/relations/?*': (route) => renderMenu('relations'),
      '*': (route) => renderMenu('readme'),
    },
    lazy: false,
    transition: false,
  })

}
