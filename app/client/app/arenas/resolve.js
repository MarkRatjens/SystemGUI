app.arenas.resolve = (route) => (a,x) => a.div([
  a.h3(`Resolve`),
  a.p('Are you sure that you want to resolve this arena?'),
  app.form({
    url: `/api/arenas/@${route.params.arenaIdentifier}/resolve`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
