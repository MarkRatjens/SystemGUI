app.admin.arenas.installer = (route) => (a,x) => [
  a.h3('Generate arena installations?'),
  app.form({
    url: `/api/arena/${route.params.arenaIdentifier}/installer`,
    method: 'PUT',
    form: (f) => [
      f.buttons({
        route: route,
      })
    ],
    success: () => route.open(`..`),
  }),
];
