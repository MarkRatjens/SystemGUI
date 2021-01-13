app.admin.blueprints.import = (router) => (a, x) => [
  a.h1("Import blueprint"),
  app.form({
    url: "/api/import",
    form: (f) => [
      f.field({
        key: 'space',
        as: 'hidden',
        value: 'blueprints',
      }),
      f.field({
        key: 'descriptor',
        as: 'one',
        form: (ff) => [
          ff.field({
            key: "repository",
            type: 'url',
            required: true,
          }),
          ff.field({
            key: "branch",
          }),
          ff.field({
            key: "identifier",
          }),
        ],
      }),
      f.buttons({router: router}),
    ],
    success: (blueprint) => router.open(`../${blueprint.identifier}`),
  }),
];
