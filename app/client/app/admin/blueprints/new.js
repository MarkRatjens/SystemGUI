app.admin.blueprints.new = (router) => (a, x) => a.div([
  a.h1("New blueprint"),
  app.form({
    url: "/api/blueprints",
    form: (f) => [
      f.field({
        key: "identifier",
        required: true,
      }),
      f.buttons({router: router}),
    ],
    success: (blueprint_identifier) => router.open(`../${blueprint_identifier}`),
  }),
]);
