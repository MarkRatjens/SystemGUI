app.blueprints.design.location = (route, blueprint) => (a, x) => a.div([
  a.h3('Location'),
  app.fetch({
    url: [
      `/api/locations/@${route.params.blueprintIdentifier}`,
      `/api/keys`,
    ],
    success: ([location, keys]) => [
      app.form({
        url: `/api/locations/@${route.params.blueprintIdentifier}`,
        method: "PUT",
        object: location,
        scope: 'model',
        horizontal: true,
        form: (f) => [
          f.field({
            key: 'repository',
            placeholder: 'Git repo URL',
            required: true,
          }),
          f.field({
            key: 'branch',
            placeholder: 'Optional branch',
          }),
          f.field({
            key: 'key',
            as: 'select',
            placeholder: 'Optional key',
            selections: keys.map((key) => [key.identifier, [key.identifier, key.explanation ? ` - ${key.explanation}` : ''].join('')]),
          }),
          f.buttons({route: route}),
        ],
        success: () => route.open('..'),
      }),
    ]
  }),
]);
