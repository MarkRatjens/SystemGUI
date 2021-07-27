app.blueprints.design.menu = (route) => (a,x) => {

  let renderMenu = (active) => [
    app.button({
      label: 'Specification',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design`),
      class: `btn app-btn${active == 'specification' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Icon',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/icon`),
      class: `btn app-btn${active == 'icon' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Readme',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/readme`),
      class: `btn app-btn${active == 'readme' ? ' active' : ''}`,
    }),
    app.button({
      label: 'License',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/license`),
      class: `btn app-btn${active == 'license' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Form',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/form`),
      class: `btn app-btn${active == 'form' ? ' active' : ''}`,
    }),
    app.button({
      label: 'Files',
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/files`),
      class: `btn app-btn${active == 'files' ? ' active' : ''}`,
    }),
  ]

  return route.mount({
    routes: {
      '/icon/?*': (route) => renderMenu('icon'),
      '/readme/?*': (route) => renderMenu('readme'),
      '/license/?*': (route) => renderMenu('license'),
      '/form/?*': (route) => renderMenu('form'),
      '/files/?*': (route) => renderMenu('files'),
      '*': (route) => renderMenu('specification'),
    },
    lazy: false,
    transition: false,
  })

}
