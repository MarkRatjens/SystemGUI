app.user_keys.edit = (route) => a.div([
  a.h3('Edit user key'),
  app.fetch({
    url: `/api/user_keys/@${route.params.userKeyIdentifier}`,
    success: token => a.div([
      app.jsonForm({
        url: `/api/user_keys/@${route.params.userKeyIdentifier}`,
        method: "PUT",
        object: token,
        route: route,
        scope: 'model',
        horizontal: true,
        form: (f) => [
          ...app.user_keys.form.issuer(f),
          ...app.user_keys.form.about(f),
        ],
        digest: (form) => app.compact(form),
        success: (identifier) => a({$init: () => route.open(`../../@${identifier}`)}),
      }),
    ])
  }),
]);
