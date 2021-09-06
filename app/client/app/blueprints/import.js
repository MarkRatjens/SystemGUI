app.blueprints.import = (route) => (a, x) => a.div([
  a.h1("Import blueprint"),
  app.jsonForm({
    url: "/api/publications/import",
    route: route,
    method: 'POST',
    scope: 'model',
    form: (f) => [
      f.field({
        key: "repository",
        label: 'Repository URL',
        type: 'url',
        required: true,
      }),
      f.field({
        key: "branch",
      }),
      f.field({
        key: 'identifier',
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
