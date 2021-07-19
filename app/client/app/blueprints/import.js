app.blueprints.import = (route) => (a, x) => a.div([
  a.h1("Import blueprint"),
  app.form({
    url: "/api/blueprints/import",
    scope: 'import',
    form: (f) => [
      f.field({
        key: "repository",
        label: 'Repository URL',
        type: 'url',
        required: true,
      }),
      // app.collapse({
      //   label: "Advanced",
      //   body: [
          f.field({
            key: "branch",
          }),
          f.field({
            key: "identifier",
          }),
      //   ]
      // }),
      f.buttons({route: route}),
    ],
    success: (blueprint_identifier) => {
      dashboardMenu.$render()
      route.open(`../@${blueprint_identifier}`)
    },
  }),
]);
