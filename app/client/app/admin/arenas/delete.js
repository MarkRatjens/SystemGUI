app.admin.arenas.delete = (router) => (a,x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/arenas/${router.params.arenaIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
]);
