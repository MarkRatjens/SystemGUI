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
        key: "identifier",
      }),
    ],
    digest: (form) => app.compact(form),
    success: (blueprint_identifier) => {
      dashboardMenu.$render()
      route.open(`../@${blueprint_identifier}`)
    },
  }),
]);
