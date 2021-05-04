app.admin.packs.build = (router) => (a,x) => a.div([
  a.h3(`Build?`),
  app.form({
    url: `/api/packs/${router.params.arenaIdentifier}/${router.params.blueprintIdentifier}/commit`,
    method: "POST",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('..'),
  }),
]);
