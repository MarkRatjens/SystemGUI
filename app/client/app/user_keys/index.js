app.user_keys.index = (route) => a.div([
  app.button({
    label: app.icon('fa fa-plus', 'New'),
    onclick: () => route.open('new')
  }),
  a.hr,
  app.fetch({
    url: `/api/user_keys`,
    success: tokens => a.div(
      tokens.map((token) =>
        app.button({
          label: [token.identifier, ' ', token.explanation ? a.small(token.explanation) : ''],
          class:'btn app-btn d-block w-100 text-left',
          onclick: () => route.open(`@${token.identifier}`)
        }),
      ),
    )
  }),
]);
