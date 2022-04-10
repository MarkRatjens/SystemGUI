app.providers.index = (route) => a['app-providers-index']([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      onclick: () => route.open('new'),
    }),
  ]),
  a.small('Providers'),
  app.fetch({
    url: '/api/providers',
    placeholder: app.spinner('Loading providers'),
    success: (providers, el) => providers.length
    ? a['div.container-fluid.border-top'](providers.map(provider => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-md-3.p-2']([
          provider.identifier,
        ]),
        a['div.col-md.p-2']([
          app.providers.types.qualifiers[provider.qualifier],
        ]),
      ]),
      () => route.open(`@${provider.identifier}`)
    ))
  )
  : a['.p-2'](app.placeholder('No providers')),
}),
])
