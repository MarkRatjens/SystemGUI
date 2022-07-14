app.capsules.show = (route) => a['app-capsules-show']([
  app.fetch({
    url: `/api/capsules/@${route.params.capsuleIdentifier}`,
    placeholder: app.spinner('Loading capsule'),
    success: (capsule) => a['div.well.p-1']([
      x.out(capsule),
    ]),
  }),
  a.br,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete capsule',
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ]
  }),
])
