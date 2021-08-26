app.blueprints.design.export = (route, blueprint) => (a, x) => a.div([
  a.h3(`Export`),
  app.fetch({
    url: `/api/keys`,
    placeholder: app.spinner('Loading blueprint'),
    success: (keys) => [
      app.form({
        url: `/api/publications/@${route.params.blueprintIdentifier}/export`,
        method: "POST",
        scope: 'model',
        form: (f) => [
          f.field({
            key: 'key',
            label: false,
            as: 'select',
            placeholder: 'Select a key',
            selections: keys.map((key) => [key.identifier, `${key.username}@${key.domain}${key.explanation ? (' - ' + key.explanation) : ''}`]),
          }),
          f.field({
            key: 'message',
            as: 'textarea',
            label: false,
            placeholder: 'Message',
          }),
          f.buttons({route: route}),
        ],
        success: () => route.open('..'),
      }),
    ],
  }),
]);
