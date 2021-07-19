app.admin.packs.delete = (route) => (a,x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/packs/${route.params.resolutionIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('../..'),
  }),
]);
