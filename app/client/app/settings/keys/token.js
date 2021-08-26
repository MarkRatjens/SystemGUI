app.settings.keys.token = (route, blueprint) => (a, x) => a.div([
  app.form({
    url: `/api/keys/@${route.params.keyIdentifier}`,
    method: "PUT",
    scope: 'model',
    form: (f) => [
      f.field({
        key: 'token',
        label: false,
        as: 'textarea',
        placeholder: 'Token',
        required: true,
      }),
      f.buttons({route: route}),
    ],
    success: () => route.open('..'),
  }),
]);
