app.admin.publications.sync = (router) => (a, x) => a.div([
  a.h3(`Synchronize?`),
  a.p('Overwrite this publication with data from its blueprint.'),
  app.form({
    url: `/api/publications/${router.params.publication_id}/sync`,
    method: "POST",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('..'),
  }),
]);
