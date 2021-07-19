app.admin.provisioning.delete = (route) => (a,x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/provisioning/${route.params.resolutionIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('../..'),
  }),
]);
