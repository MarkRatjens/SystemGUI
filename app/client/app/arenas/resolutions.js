app.arenas.resolutions = (route) => a['app-arenas-resolutions']([
  app.fetch({
    url: '/api/resolutions/index',
    placeholder: app.spinner('Loading resolutions'),
    query: {arena_identifier: route.params.arenaIdentifier},
    success: resolutions => a.table([
      a.tbody(app.sortByIdentifier(resolutions).map(resolution => a.tr([
        a.td([resolution.identifier.split('::')[1]]),
        a.td([
          !resolution.pack.exist
          ? a['.error'](app.icon('fas fa-exclamation-circle', 'No pack'))
          : !resolution.provisions.exist
          ? a['.error'](app.icon('fas fa-exclamation-circle', 'No provisions'))
          : resolution.stale
          ? a['.error'](app.icon('fas fa-exclamation-circle', 'Stale'))
          : a['.success'](app.icon('fas fa-check-circle', 'Ready')),
        ]),
      ], {
        $on: {click: (e) => route.open(`@${resolution.identifier.split('::')[1]}`)},
        class: 'app-clickable',
      }))),
    ], {
      class: 'table',
    }),
  }),
])
