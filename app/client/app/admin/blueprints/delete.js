app.admin.blueprints.delete = (router) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/blueprints/${router.params.blueprintIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
]);
