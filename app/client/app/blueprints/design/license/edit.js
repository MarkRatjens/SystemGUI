app.blueprints.design.license.edit = (route, blueprint) => a.div([
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
    placeholder: app.spinner('Loading blueprint license'),
    success: (license, el) => a.div([
      app.jsonForm({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}/license`,
        method: "PUT",
        object: {license: license},
        route: route,
        form: (f) => [
          f.field({
            key: 'license',
            as: 'markdown',
            label: false,
          }),
        ],
        success: (result, el) => {
          route.open('..')
        },
      }),
    ]),
  }),
]);
