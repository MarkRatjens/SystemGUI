app.admin.arenas.delete = (route) => (a,x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/arena/${route.params.arenaIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('../..'),
  }),
]);
