app.settings.keys.index = (route, blueprint) => (a, x) => a.div([
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => route.open('new')
  }),
  a.hr,
  app.fetch({
    url: `/api/keys`,
    success: tokens => [
      tokens.map((token) =>
        app.button({
          label: [`${token.username}@${token.domain} `, a.small(token.explanation)],
          class:'btn app-btn d-block w-100 text-left',
          onclick: () => route.open(`@${token.identifier}`)
        }),
      ),
    ]
  }),
]);
