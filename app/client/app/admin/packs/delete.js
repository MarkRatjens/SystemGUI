app.admin.packs.delete = (router) => (a,x) => a.div([
  a.h3(`Delete?`),
  app.form({
    url: `/api/packs/${router.params.resolutionIdentifier}`,
    method: "DELETE",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('../..'),
  }),
]);
