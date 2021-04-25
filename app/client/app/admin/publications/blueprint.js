app.admin.publications.blueprint = (router) => (a, x) => a.div([
  a.h3(`Create blueprint?`),
  app.form({
    url: `/api/blueprints`,
    scope: "blueprint",
    form: (f) => [
      f.field({
        key: "identifier",
        as: 'hidden',
        value: router.params.publication_id,
      }),
      f.buttons({router: router}),
    ],
    success: () => router.open(`/admin/blueprints/${router.params.publication_id}`),
  }),
]);
