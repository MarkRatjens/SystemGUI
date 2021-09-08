app.user_keys.new = (route) => (a, x) => a.div([
  a.h3('New user key'),
  app.jsonForm({
    url: `/api/user_keys`,
    method: "POST",
    scope: 'model',
    route: route,
    horizontal: true,
    form: (f) => [
      app.user_keys.form.token(f),
      app.user_keys.form.issuer(f),
      app.user_keys.form.about(f),
    ],
    digest: (form) => app.compact(form),
    success: (identifier) => route.open(`../@${identifier}`),
  }),
]);
