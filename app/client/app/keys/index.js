app.keys.index = (route) => (a, x) => a.div([
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
          label: [token.identifier, ' ', token.explanation ? a.small(token.explanation) : null],
          class:'btn app-btn d-block w-100 text-left',
          onclick: () => route.open(`@${token.identifier}`)
        }),
      ),
    ]
  }),
]);
