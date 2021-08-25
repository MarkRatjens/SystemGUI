app.arenas.installation.build = (route) => (a,x) => a.div([
  a.h3(`Build`),
  a.p('Are you sure that you want to build an image for this pack?'),
  app.form({
    // url: `/api/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
    // method: "POST",
    form: (f) => [f.buttons({route: route})],
    action: () => route.open('../building'),
  }),
]);
