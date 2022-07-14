app.domains.index = (route) => a['app-domains-index']([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      onclick: () => route.open('new'),
    }),
  ]),
  a['div.border-bottom'](a.small('Domains')),
  app.fetch({
    url: '/api/domains',
    placeholder: app.spinner('Loading domains'),
    success: (domains, el) => domains.length
    ? a['div.container-fluid'](domains.map(domain => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-md-3.p-2']([
          domain.identifier,
        ]),
        a['div.col-md-1.p-2']([
          domain.primary ? app.icon('fas fa-star') : '',
        ]),
        a['div.col-md.p-2']([
          a.small([(domain.about || {}).explanation || a['!']('&nbsp;')]),
        ]),
      ]),
      () => route.open(`@${domain.identifier}`)
    )))
    : a['div.p-2'](app.placeholder('No domains')),
  }),
])
