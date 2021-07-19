app.admin.resolutions.delete = (route) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/resolutions/${route.params.resolutionIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('../..'),
  }),
]);
