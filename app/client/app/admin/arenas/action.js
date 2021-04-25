app.admin.arenas.action = (router) => (a,x) => a.div([
  a.h3(`Perform ${router.params.action}?`),
  app.form({
    url: `/api/arenas/${router.params.arena_id}/${router.params.action}`,
    form: (f) => [
      f.buttons({
        router: router,
      })
    ],
    success: () => router.open(`..`),
  }),
]);
