app.admin.packs.commit = (route) => (a,x) => a.div([
  a.h3(`Commit?`),
  app.form({
    url: `/api/packs/${route.params.resolutionIdentifier}/commit`,
    method: "POST",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('..'),
  }),
]);
