app.admin.publications.sync = (route) => (a, x) => a.div([
  a.h3(`Synchronize?`),
  a.p('Overwrite this publication with data from its blueprint.'),
  app.form({
    url: `/api/publications/${route.params.publication_id}/sync`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
