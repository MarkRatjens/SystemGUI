app.admin.publications.export = (route) => (a, x) => a.div([
  a.h3(`Export?`),
  app.form({
    url: `/api/publications/${route.params.publication_id}/export`,
    method: "POST",
    form: (f) => [
      f.field({
        key: 'message',
        as: 'textarea',
      }),
      f.buttons({route: route})
    ],
    success: () => route.open('..'),
  }),
]);
