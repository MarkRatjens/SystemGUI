app.catalogs.index = (route) => a['app-catalogs-index']([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      onclick: () => route.open('new'),
    }),
  ]),
  a['div.border-bottom'](a.small('Catalogs')),
  app.fetch({
    url: '/api/catalogs',
    placeholder: app.spinner('Loading catalogs'),
    success: (catalogs, el) => catalogs.length
    ? a['div.container-fluid'](catalogs.map(catalog => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-md-3.p-2']([
          catalog.identifier,
        ]),
        a['div.col-md-3.p-2']([
          (catalog.about || {}).label || a['!']('&nbsp;'),
        ]),
        a['div.col-md.p-2']([
          a.small([(catalog.about || {}).explanation || a['!']('&nbsp;')]),
        ]),
      ]),
      () => route.open(`@${catalog.identifier}`)
    )))
    : a['div.p-2'](app.placeholder('No catalogs')),
  }),
])
