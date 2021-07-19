app.admin.publications.new = (route) => (a, x) => a.div([
  a.h1("New publication"),
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
      f.buttons({route: route}),
    ],
    success: (publication_identifier) => route.open(`../${publication_identifier}`),
  }),
]);
