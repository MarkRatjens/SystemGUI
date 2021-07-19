app.admin.arenas.resolver = (route) => (a,x) => [
  a.h3('Generate arena resolutions?'),
  app.form({
    url: `/api/arena/${route.params.arenaIdentifier}/resolver`,
    method: 'PUT',
    form: (f) => [
      f.buttons({
        route: route,
      })
    ],
    success: () => route.open(`..`),
  }),
];
