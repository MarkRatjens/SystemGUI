app.admin.blueprints.show.menu = (route) => (a,x) => {

  let renderMenu = (active) => [
    app.button({
      label: 'Specification',
      onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}`),
      class: `btn app-btn${active == 'specification' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Icon',
      onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}/icon`),
      class: `btn app-btn${active == 'icon' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Readme',
      onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}/readme`),
      class: `btn app-btn${active == 'readme' ? ' active' : ''}`,
    }),
    app.button({
      label: 'License',
      onclick: () => route.open(`/admin/blueprints/${route.params.blueprintIdentifier}/license`),
      class: `btn app-btn${active == 'license' ? ' active' : ''}`,
    }),
  ]

  return route.mount({
    routes: {
      '/icon/?*': (route) => renderMenu('icon'),
      '/readme/?*': (route) => renderMenu('readme'),
      '/license/?*': (route) => renderMenu('license'),
      '*': (route) => renderMenu('specification'),
    },
    lazy: false,
    transition: false,
  })

}
