app.images.show = (route) => a['app-images-show']([
  app.fetch({
    url: `/api/images/@${route.params.imageIdentifier}`,
    placeholder: app.spinner('Loading image'),
    success: (image) => a['div.well.p-1']([
      x.out(image),
    ]),
  }),
  a.br,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete image',
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ]
  }),
])
