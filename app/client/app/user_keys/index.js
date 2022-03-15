app.user_keys.index = (route) => a.div([
  app.close(route),
  a.h5('User keys'),
  a.p([
    app.button({
      label: app.icon('fa fa-plus', 'New'),
      onclick: () => route.open('new')
    }),
  ]),
  app.fetch({
    url: `/api/user_keys`,
    success: user_keys => user_keys.length
    ? a.div(
      user_keys.map((user_key) =>
      app.button({
        label: [user_key.identifier, ' ', user_key.explanation ? a.small(user_key.explanation) : ''],
        class:'btn app-btn d-block w-100 text-left',
        onclick: () => route.open(`@${user_key.identifier}`)
      }),
    ),
  )
  : app.placeholder('No user keys'),
}),
]);
