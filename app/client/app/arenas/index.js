app.arenas.index = (route) => (a,x) => a.div([
  app.close(route),
  a.h1('Arenas'),
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => route.open('new'),
  }),
  app.fetch({
    url: '/api/arenas',
    placeholder: app.spinner('Loading arenas'),
    success: (arenas, el) => [
      a.table([
        a.tbody(arenas.map(arena => a.tr([
          a.td([arena.identifier]),
          a.td([
            (arena.about || {}).title || a['!']('&nbsp;'),
            a.br,
            a.small([(arena.about || {}).explanation || a['!']('&nbsp;')]),
          ]),
          a.td([(arena.domain || {}).identifier || null]),
        ], {
          $on: {click: () => route.open(`@${arena.identifier}`)},
          class: 'app-clickable',
        }))),
      ], {
        class: 'table',
      }),
    ]
  }),
])