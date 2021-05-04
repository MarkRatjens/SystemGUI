app.admin.blueprints.sync = (router) => (a, x) => a.div([
  a.h3(`Synchronize?`),
  a.p('Overwrite this blueprint with data from its publication.'),
  app.form({
    url: `/api/blueprints/${router.params.blueprintIdentifier}/sync`,
    method: "POST",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('..'),
  }),
]);
