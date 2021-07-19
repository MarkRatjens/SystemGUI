app.admin.arenas.apply = (route) => (a,x) => a.div([
  a.h3(`Apply?`),
  app.form({
    url: `/api/arena/${route.params.arenaIdentifier}/apply`,
    form: (f) => [
      f.buttons({
        route: route,
      })
    ],
    success: () => route.open(`..`),
  }),
]);
