app.arenas.resolutions.images = (route, images) => a['app-arenas-resolutions-images']([
  a['div.border-bottom'](a.small('Images')),
  images.length
  ? a['div.container-fluid'](images.map(
    image => app.clickable(
      a['div.row.border-bottom.app-clickable']([
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
      () => route.open(`/images/@${image.id.substring(7, 18)}`)
    ),
  ))
  : a['.p-2'](app.placeholder('No images')),
])
