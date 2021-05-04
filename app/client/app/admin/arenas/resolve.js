app.admin.arenas.resolve = (router) => (a,x) => [
  a.h3('Resolve?'),
  app.form({
    url: `/api/arenas/${router.params.arenaIdentifier}/resolve`,
    form: (f) => [
      f.buttons({
        router: router,
      })
    ],
    success: () => router.open(`..`),
  }),
];
