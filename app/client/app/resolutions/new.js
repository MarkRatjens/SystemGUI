app.resolutions.new = (router) => (a, x) => [
  a.h1("New resolution"),
  app.form({
    url: "/api/resolutions",
    scope: "resolution",
    form: (f) => [
      f.field({
        key: "identifier",
        required: true,
      }),
      f.buttons({router: router}),
    ],
    success: (resolution) => router.open(`../${resolution.identifier}`),
  }),
];
