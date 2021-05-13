app.admin.publications.export = (router) => (a, x) => a.div([
  a.h3(`Export?`),
  app.form({
    url: `/api/publications/${router.params.publication_id}/export`,
    method: "POST",
    form: (f) => [
      f.field({
        key: 'message',
        as: 'textarea',
      }),
      f.buttons({router: router})
    ],
    success: () => router.open('..'),
  }),
]);
