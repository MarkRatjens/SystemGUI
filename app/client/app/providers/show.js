app.providers.show = (route) => a['app-providers-show']([
  app.fetch({
    url: `/api/providers/@${route.params.providerIdentifier}`,
    placeholder: app.spinner('Loading provider'),
    success: (provider) => a['div.p-2']([
      app.providers.types.qualifiers[provider.qualifier],
    ]),
  }),

  // app.float({
  //   right: [
  //     app.button({
  //       label: app.icon('fa fa-edit', 'Edit'),
  //       onclick: (e) => route.open('edit'),
  //     }),
  //   ]
  // }),
  a.hr,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete provider',
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ]
  }),
])
