app.admin.packs.build = (route) => (a,x) => a.div([
  a.h3(`Build?`),
  app.form({
    url: `/api/packs/${route.params.arenaIdentifier}/${route.params.blueprintIdentifier}/commit`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
