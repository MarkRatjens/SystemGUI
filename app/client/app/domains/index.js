app.domains.index = (route) => a['app-domains-index']([
  a.h3('Domains'),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      onclick: () => route.open('new'),
    }),
  ]),
  app.fetch({
    url: '/api/domains',
    placeholder: a['div.p-2'](app.spinner('Loading domains')),
    success: (domains) => domains.length
    ? a.table([
      a.tbody(app.sortByIdentifier(domains).map(domain => a.tr([
        a.td([domain.identifier]),
        a.td([domain.primary ? app.icon('fas fa-star') : '']),
      ], {
        $on: {click: (e, el) => route.open(`@${domain.identifier}`)},
        class: 'app-clickable',
      }))),
    ], {
      class: 'table',
    })
    : app.placeholder('No domains'),
  }),
])
