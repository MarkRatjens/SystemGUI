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
    ],
    digest: (form) => app.compact(form),
    success: (params) => route.open('follow', params),
  }),
]);
