app.admin.arenas.resolve = (router) => (a,x) => [
  a.h3('Resolve?'),
  app.form({
    url: `/api/arenas/${router.params.arena_id}/resolve`,
    form: (f) => [
      f.buttons({
        router: router,
      })
    ],
    success: () => router.open(`..`),
  }),
];
