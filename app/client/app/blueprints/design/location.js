app.blueprints.design.location = (route, blueprint) => (a, x) => a.div([
  a.h3('Location'),
  app.fetch({
    url: [
      `/api/blueprints/@${route.params.blueprintIdentifier}/summary`,
      `/api/keys`,
    ],
    success: ([blueprint, keys]) => [
      app.jsonForm({
        url: `/api/locations/@${route.params.blueprintIdentifier}`,
        method: "PUT",
        object: blueprint.location,
        scope: 'model',
        horizontal: true,
        route: route,
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
        ],
        digest: (form) => app.compact(form),
        success: () => route.open('..'),
      }),
    ]
  }),
]);
