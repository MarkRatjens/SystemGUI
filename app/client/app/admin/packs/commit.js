app.admin.packs.commit = (router) => (a,x) => a.div([
  a.h3(`Commit?`),
  app.form({
    url: `/api/packs/${router.params.resolutionIdentifier}/commit`,
    method: "POST",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('..'),
  }),
]);
