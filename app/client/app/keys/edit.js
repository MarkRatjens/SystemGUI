app.keys.edit = (route) => (a, x) => a.div([
  app.fetch({
    url: `/api/keys/@${route.params.keyIdentifier}`,
    success: token => [
      app.jsonForm({
        url: `/api/keys/@${route.params.keyIdentifier}`,
        method: "PUT",
        object: token,
        route: route,
        scope: 'model',
        horizontal: true,
        form: (f) => [
          app.keys.form.key(f),
        ],
        digest: (form) => app.compact(form),
        success: (identifier) => route.open(`../../@${identifier}`),
      }),
    ]
  }),
]);
