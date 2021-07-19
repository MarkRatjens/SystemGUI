app.admin.publications.delete = (route) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/publications/${route.params.publication_id}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('../..'),
  }),
]);
