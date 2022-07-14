app.arenas.resolutions = (route) => a['app-arenas-resolutions']([
  a['div.border-bottom'](a.small('Resolutions')),
  app.fetch({
    url: '/api/resolutions',
    placeholder: a['div.p-2'](app.spinner('Loading resolutions')),
    query: {arena_identifier: route.params.arenaIdentifier},
    success: resolutions => resolutions.length
    ? a['div.container-fluid'](resolutions.map(resolution => app.clickable(
      a['div.row.border-bottom.app-clickable']([
        a['div.col-lg-10.p-2']([
          resolution.identifier.split('::')[1],
        ]),
        a['div.col-lg-2.p-2']([
          !resolution.pack.exist
          ? a['.error'](app.icon('fas fa-exclamation-circle', 'No package'))
          : !resolution.orchestration.exist
          ? a['.error'](app.icon('fas fa-exclamation-circle', 'No orchestration'))
          : resolution.stale
          ? a['.error'](app.icon('fas fa-exclamation-circle', 'Stale'))
          : a['.success'](app.icon('fas fa-check-circle', 'Ready')),
        ]),
      ]),
      () => route.open(`@${resolution.identifier.split('::')[1]}`)
    )))
    : a['div.border-bottom.p-2'](app.placeholder('No resolutions'))
  }),
])
