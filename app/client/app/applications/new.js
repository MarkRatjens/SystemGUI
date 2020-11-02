app.applications.new = (router) => (a, x) => [
  a.h2("New"),
  app.form({
    url: "/api/applications",
    scope: "application",
    form: (f) => [
      f.field({
        key: "identifier",
      }),
      f.buttons({router: router}),
    ],
    success: (application) => router.open(`../${application.identifier}`),
  }),
];
