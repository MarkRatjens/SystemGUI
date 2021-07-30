app.blueprints.design.location = (route, blueprint) => (a, x) => a.div([
  a.h3('Location'),
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/location`,
    success: location => [
      app.form({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}/location`,
        method: "PUT",
        object: location,
        scope: 'location',
        form: (f) => [
          f.field({
            key: 'repository',
            label: false,
            placeholder: 'Git repo URL',
            type: 'url',
            required: true,
          }),
          f.field({
            key: 'branch',
            label: false,
            placeholder: 'Optional branch',
          }),
          f.buttons({route: route}),
        ],
        success: () => route.open('..'),
      }),
    ]
  }),
]);
