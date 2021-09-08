app.blueprints.import = (route) => (a, x) => a.div([
  a.h1("Import blueprint"),
  app.jsonForm({
    url: "/api/publications/import",
    route: route,
    method: 'POST',
    form: (f) => [
      f.field({
        key: 'model',
        label: false,
        as: 'one',
        form: (ff) => [
          ff.field({
            key: "repository",
            label: 'Repository URL',
            type: 'url',
            required: true,
          }),
          ff.field({
            key: "branch",
          }),
          ff.field({
            key: 'identifier',
          }),
        ]
      }),
      f.field({
        key: 'force',
        as: 'checkbox',
        label: false,
        control: {label: 'Force'},
      }),
    ],
    digest: (form) => app.compact(form),
    success: () => route.load('output'),
  }),
]);
