app.settings.keys.new = (route, blueprint) => (a, x) => a.div([
  a.h5('New'),
  app.form({
    url: `/api/settings/keys`,
    method: "POST",
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
      f.field({
        key: 'token',
        as: 'textarea',
        required: true,
      }),
      f.buttons({route: route}),
    ],
    success: () => route.open('..'),
  }),
]);
