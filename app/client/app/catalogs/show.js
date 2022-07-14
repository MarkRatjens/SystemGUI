app.catalogs.show = (route) => a['app-catalogs-show']([
  app.fetch({
    url: `/api/catalogs/@${route.params.catalogIdentifier}`,
    placeholder: app.spinner('Loading app'),
    xxsuccess: (app) => app.primary
    ? app.icon('fas fa-star', 'Primary app')
    : ''
  }),
  // a.br,
  // app.float({
  //   right: [
  //     app.button({
  //       label: app.icon('fa fa-edit', 'Edit'),
  //       onclick: (e) => route.open('edit'),
  //     }),
  //   ]
  // }),
  // a.hr,
  // app.float({
  //   right: [
  //     app.button({
  //       label: app.icon('fa fa-trash'),
  //       title: 'Delete app',
  //       class: 'btn btn-outline-danger',
  //       onclick: () => route.open('delete'),
  //     }),
  //   ]
  // }),
])
