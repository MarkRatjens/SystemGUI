app.blueprints.design.branch = (route, blueprint) => (a, x) => a.div([
  a.h3(`Branch blueprint`),
  app.fetch({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}`,
    success: blueprint => [
      app.form({
        url: `/api/blueprints/@${route.params.blueprintIdentifier}/publication/branch`,
        method: "POST",
        form: (f) => [
          f.field({
            key: 'branch',
            as: 'selectinput',
            placeholder: 'Select or enter a branch',
            required: true,
            value: blueprint.publication.branch,
            selections: blueprint.publication.branches,
          }),
          f.buttons({route: route}),
        ],
        success: () => route.open('..'),
      }),
    ]
  }),

]);
