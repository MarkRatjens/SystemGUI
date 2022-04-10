app.blueprints.import = (route) => a.div([
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
            horizontal: true,
          }),
          ff.field({
            key: "branch",
            horizontal: true,
          }),
          ff.field({
            key: 'identifier',
            horizontal: true,
          }),
        ]
      }),
      f.field({
        key: 'force',
        as: 'checkbox',
        label: false,
        control: {label: 'Force'},
        value: 'on',
        horizontal: true,
      }),
    ],
    digest: (form) => app.compact(form),
    success: (model) => {
      route.load('identify', model)
    },
  }),
]);
