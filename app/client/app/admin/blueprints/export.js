app.admin.blueprints.export = (route, blueprint) => (a, x) => a.div([
  a.h3(`Export`),
  app.fetch({
    url: `/api/blueprints/${route.params.blueprintIdentifier}/diffs`,
    success: diffs => [
      app.publicationLabel(blueprint.publication),
      diffs,
      app.form({
        url: `/api/blueprints/${route.params.blueprintIdentifier}/publication/export`,
        method: "POST",
        form: (f) => [
          f.field({
            key: 'message',
          }),
          f.buttons({route: route}),
        ],
        success: () => route.open('..'),
      }),
    ]
  }),
]);
