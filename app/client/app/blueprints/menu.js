app.blueprints.menu = (route) => (a,x) => {

  let renderMenu = (active) => app.float({
    left: [
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
    ],
    right: [
      app.button({
        label: app.icon('fa fa-trash', 'Delete blueprint'),
        class: 'btn btn-outline-danger',
        onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/delete`),
      }),
    ],
  })

  return route.mount({
    routes: {
      '/license/?*': (route) => renderMenu('license'),
      '/bindings/?*': (route) => renderMenu('bindings'),
      '*': (route) => renderMenu('readme'),
    },
    lazy: false,
    transition: false,
  })

}
