app.capsules.index = (route) => a['app-capsules-index']([
  app.close(route),
  a['div.pt-4.border-bottom'](a.small('Capsules')),
  app.fetch({
    url: '/api/capsules',
    placeholder: app.spinner('Loading capsules'),
    success: (capsules, el) => capsules.length
    ? a['div.container-fluid'](capsules.map(capsule => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-lg-8.p-2']([
          a.code(capsule.id.substring(0, 11)),
          ' ',
          a['.d-inline-block.text-nowrap'](capsule.names.map(tag => a.div(tag))),
        ]),
        a['div.col-lg-2.p-2']([
          a['.d-inline-block.text-nowrap'](
            a.small(new Date(capsule.created*1000).toLocaleString()),
          ),
        ]),
        a['div.col-lg-2.p-2']([
          app.docker.containers.state.label(capsule.state),
        ]),
      ]),
      () => route.open(`@${capsule.id.substring(0, 11)}`)
    ))
  )
  : a['div.p-2'](app.placeholder('No capsules')),
}),
])
