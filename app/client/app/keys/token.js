app.keys.token = (route) => (a, x) => a.div([
  app.form({
    url: `/api/keys/@${route.params.keyIdentifier}`,
    method: "PUT",
    scope: 'model',
    horizontal: true,
    form: (f) => [
      f.field({
        key: 'token',
        label: false,
        as: 'textarea',
        placeholder: 'Token',
        required: true,
        control: {
          textareaTag: {
            class: 'form-control text-monospace',
          },
        },
      }),
      f.buttons({route: route}),
    ],
    success: () => route.open('..'),
  }),
]);
