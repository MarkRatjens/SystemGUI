app.admin.publications.blueprint = (route) => (a, x) => a.div([
  a.h3(`Create blueprint?`),
  app.form({
    url: `/api/publications/${route.params.publication_id}/blueprint`,
    form: (f) => [
      f.field({
        key: "identifier",
        as: 'hidden',
        value: route.params.publication_id,
      }),
      f.buttons({route: route}),
    ],
    success: () => route.open(`..`),
  }),
]);
