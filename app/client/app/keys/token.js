app.keys.token = (route) => (a, x) => a.div([
  app.form({
    url: `/api/keys/@${route.params.keyIdentifier}`,
    method: "PUT",
    scope: 'model',
    horizontal: true,
    form: (f) => [
      app.keys.form.token(f),
      f.buttons({route: route}),
    ],
    success: () => route.open('..'),
  }),
]);
