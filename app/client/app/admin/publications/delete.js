app.admin.publications.delete = (router) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/publications/${router.params.publication_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
]);
