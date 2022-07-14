app.arenas.index = (route) => a['app-arenas-index']([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      title: 'New arena',
      onclick: () => route.open('new'),
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-compact-disc', 'Images'),
      title: 'Images',
      onclick: () => route.open('images'),
    }),
    ' ',
    app.button({
      label: app.icon('fa fa-capsules', 'Capsules'),
      title: 'Capsules',
      onclick: () => route.open('capsules'),
    }),
  ]),
  a['div.border-bottom'](a.small('Arenas')),
  app.fetch({
    url: '/api/arenas',
    placeholder: app.spinner('Loading arenas'),
    success: (arenas, el) => arenas.length
    ? a['div.container-fluid'](arenas.map(arena => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-md-8.p-2']([
          arena.identifier,
        ]),
        // a['div.col-md.p-2']([
          //   // (arena.about || {}).title || a['!']('&nbsp;'),
          //   // ' ',
          //   // a.small([(arena.about || {}).explanation || a['!']('&nbsp;')]),
          // ]),
        ]),
        () => route.open(`@${arena.identifier}`)
      ))
    )
    : a['div.p-2'](app.placeholder('No arenas')),
  }),
])
