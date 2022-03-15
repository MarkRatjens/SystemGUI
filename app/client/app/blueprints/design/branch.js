app.blueprints.design.branch = (route, blueprint) => a.div([
  a.h3(`Branch`),
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    success: blueprint => a.div([
      app.jsonForm({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}/publication/branch`,
        method: "POST",
        route: route,
        form: (f) => [
          f.field({
            key: 'existing',
            label: 'Checkout',
            as: 'radios',
            value: 'existing',
            selections: {
              'existing': 'Existing branch',
              'new': 'New branch',
            },
          }),
          f.field({
            key: 'branch',
            label: false,
            as: 'select',
            required: true,
            value: blueprint.publication.branch,
            selections: blueprint.publication.branches,
            dependent: {
              key: 'existing',
              value: 'existing',
            },
          }),
          f.field({
            key: 'branch',
            label: false,
            placeholder: 'New branch',
            required: true,
            dependent: {
              key: 'existing',
              value: 'new',
            },
          }),
        ],
        success: () => route.open('..'),
      }),
    ])
  }),

]);
