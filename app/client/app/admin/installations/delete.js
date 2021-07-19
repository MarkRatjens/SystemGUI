app.admin.installations.delete = (route) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/installations/${route.params.installationIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({route: route})],
    success: () => route.open('../..'),
  }),
]);
