app.admin.arenas.apply = (router) => (a,x) => a.div([
  a.h3(`Apply?`),
  app.form({
    url: `/api/arenas/${router.params.arenaIdentifier}/apply`,
    form: (f) => [
      f.buttons({
        router: router,
      })
    ],
    success: () => router.open(`..`),
  }),
]);
