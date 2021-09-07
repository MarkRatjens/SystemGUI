app.blueprints.design.export = (route, blueprint) => (a, x) => a.div([
  a.h3(`Export`),
  app.form({
    url: `/api/publications/@${route.params.blueprintIdentifier}/export`,
    method: "POST",
    scope: 'model',
    form: (f) => [
      f.field({
        key: 'message',
        as: 'textarea',
        label: false,
        placeholder: 'Message',
      }),
      f.field({
        key: 'force',
        as: 'checkbox',
        label: false,
        control: {label: 'Force'},
      }),
      f.buttons({route: route}),
    ],
    success: () => route.load('output'),
  }),
]);
