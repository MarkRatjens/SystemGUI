app.admin.resolutions.delete = (router) => (a, x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/resolutions/${router.params.resolutionIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
]);
