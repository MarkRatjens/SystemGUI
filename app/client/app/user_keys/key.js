app.user_keys.key = (route) => a.div([
  route.mount({
    routes: {
      '/edit': '',
      '*': () => app.fetch({
        url: `/api/user_keys/@${route.params.userKeyIdentifier}`,
        success: user_key => a.div([
          app.close(route),
          a.h5(user_key.identifier),
          a['div']([
            (user_key.about || {}).label || '',
          ]),
          a['div']([
            a.small([(user_key.about || {}).explanation || '']),
          ]),
        ])
      }),
    },
  }),
  route.mount({
    routes: {
      '/?': app.user_keys.show,
      '/edit': app.user_keys.edit,
      '/token': app.user_keys.token,
      '/delete': app.user_keys.delete,
    },
  }),
]);
