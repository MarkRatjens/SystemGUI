app.spaces.blueprints.import = (router) => (a, x) => a.div([
  a.h1("Import"),
  app.form({
    url: "/api/publications",
    form: (f) => [
      // f.field({
      //   key: 'space',
      //   as: 'hidden',
      //   value: 'publications',
      // }),
      f.field({
        key: 'descriptor',
        label: false,
        as: 'one',
        form: (ff) => [
          ff.field({
            key: "repository",
            label: 'Repository URL',
            type: 'url',
            required: true,
          }),
          app.collapse({
            label: "Advanced",
            body: [
              ff.field({
                key: "branch",
              }),
              ff.field({
                key: "identifier",
              }),
            ]
          }),
        ],
      }),
      f.buttons({router: router}),
    ],
    success: (blueprintIdentifier) => router.open(`../${blueprintIdentifier}`),
  }),
]);
