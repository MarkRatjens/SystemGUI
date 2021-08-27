app.keys.new = (route) => (a, x) => a.div([
  a.h5('New'),
  app.jsonForm({
    url: `/api/keys`,
    method: "POST",
    scope: 'model',
    route: route,
    horizontal: true,
    form: (f) => [
      app.keys.form.key(f),
      app.keys.form.token(f),
    ],
    digest: (form) => app.compact(form),
    success: (identifier) => route.open(`../@${identifier}`),
  }),
]);
