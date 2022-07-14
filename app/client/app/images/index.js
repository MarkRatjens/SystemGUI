app.images.index = (route) => a['app-images-index']([
  app.close(route),
  a['div.pt-4.border-bottom'](a.small('Images')),
  app.fetch({
    url: '/api/images',
    placeholder: app.spinner('Loading images'),
    success: (images, el) => images.length
    ? a['div.container-fluid'](images.map(image => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-lg-8.p-2']([
          a.code(image.id.substring(7, 18)),
          ' ',
          a['.d-inline-block.text-nowrap'](image.repo_tags.map(tag => a.div(tag))),
        ]),
        a['div.col-lg-2.p-2']([
          a['.d-inline-block.text-nowrap'](
            a.small(new Date(image.created*1000).toLocaleString()),
          ),
        ]),
        a['div.col-lg-2.p-2']([
          app.float({
            right: a.small(`${(image.size/1048576).toFixed(2)} MB`),
          }),
        ]),
      ]),
      () => route.open(`@${image.id.substring(7, 18)}`)
    ))
  )
  : a['div.p-2'](app.placeholder('No images')),
}),
])
