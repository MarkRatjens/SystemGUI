app.user_keys.index = (route) => a['app-user_keys-index']([
  app.close(route),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      onclick: () => route.open('new'),
    }),
  ]),
  a['div.border-bottom'](a.small('Keys')),
  app.fetch({
    url: '/api/user_keys',
    placeholder: app.spinner('Loading keys'),
    success: (user_keys, el) => user_keys.length
    ? a['div.container-fluid'](user_keys.map(user_key => app.clickable(
      a['div.row.app-clickable.border-bottom']([
        a['div.col-md-3.p-2']([
          user_key.identifier,
        ]),
        a['div.col-md-3.p-2']([
          (user_key.about || {}).label || a['!']('&nbsp;'),
        ]),
        a['div.col-md.p-2']([
          a.small([(user_key.about || {}).explanation || a['!']('&nbsp;')]),
        ]),
      ]),
      () => route.open(`@${user_key.identifier}`)
    )))
    : a['div.p-2'](app.placeholder('No user_keys')),
  }),
])
