app.apps.show = (route) => a['app-apps-show']([
  app.fetch({
    url: `/api/apps/@${route.params.appIdentifier}`,
    placeholder: app.spinner('Loading app'),
    success: (app) => app.primary
    ? app.icon('fas fa-star', 'Primary app')
    : ''
  }),
  a.br,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-edit', 'Edit'),
        onclick: (e) => route.open('edit'),
      }),
    ]
  }),
  a.hr,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete app',
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ]
  }),
])
