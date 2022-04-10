app.arenas.capsules = (route) => a['app-arenas-capsules']([
  a['div.border-bottom'](a.small('Capsules')),
  app.fetch({
    url: '/api/capsules',
    placeholder: a['div.p-2'](app.spinner('Loading capsules')),
    query: {arena_identifier: route.params.arenaIdentifier},
    success: capsules => capsules.length
    ? a['div.container-fluid'](capsules.map(
      capsule => app.clickable(
        a['div.row.border-bottom.app-clickable']([
          a['div.col-lg-8.p-2']([
            a.code(capsule.id.substring(7, 18)),
            ' ',
            a['.d-inline-block.text-nowrap'](capsule.names.map(tag => a.div(tag))),
          ]),
          a['div.col-lg-2.p-2']([
            a['.d-inline-block.text-nowrap'](
              a.small(new Date(capsule.created*1000).toLocaleString()),
            ),
          ]),
          a['div.col-lg-2.p-2']([
            app.docker.container.state.label(capsule.state),
          ]),
        ]),
        () => route.open(`/capsules/@${capsule.identifier}`)
      ),
    ))
    : a['.p-2'](app.placeholder('No capsules'))
  }),
])
