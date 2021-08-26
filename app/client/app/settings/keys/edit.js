app.settings.keys.edit = (route, blueprint) => (a, x) => a.div([
  app.fetch({
    url: `/api/keys/@${route.params.keyIdentifier}`,
    success: token => [
      app.form({
        url: `/api/keys/@${route.params.keyIdentifier}`,
        method: "PUT",
        object: token,
        scope: 'model',
        horizontal: true,
        form: (f) => [
          f.field({
            key: 'domain',
            required: true,
          }),
          f.field({
            key: 'username',
            required: true,
          }),
          f.field({
            key: 'explanation',
          }),
          f.buttons({route: route}),
        ],
        success: () => route.open('..'),
      }),
    ]
  }),
]);
