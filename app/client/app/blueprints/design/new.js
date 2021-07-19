app.blueprints.design.new = (route) => (a, x) => a.div([
  a.h1("New blueprint"),
  app.form({
    url: "/api/blueprints",
    form: (f) => [
      f.field({
        key: "identifier",
        required: true,
      }),
      f.buttons({route: route}),
    ],
    success: (blueprint_identifier) => route.open(`../${blueprint_identifier}`),
  }),
]);
