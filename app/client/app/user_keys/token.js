app.user_keys.token = (route) => a.div([
  app.jsonForm({
    url: `/api/user_keys/@${route.params.userKeyIdentifier}`,
    method: "PUT",
    route: route,
    scope: 'model',
    horizontal: true,
    form: (f) => app.user_keys.form.token(f),
    success: () => a({$init: () => route.open('..')}),
  }),
]);
