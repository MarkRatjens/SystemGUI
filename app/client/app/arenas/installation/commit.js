app.arenas.installation.commit = (route) => (a,x) => a.div([
  a.h3(`Commit pack`),
  a.p('Are you sure that you want to commit the pack?'),
  app.form({
    url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/commit`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
