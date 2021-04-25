app.admin.packs.build = (router) => (a,x) => a.div([
  a.h3(`Build?`),
  app.form({
    url: `/api/packs/${router.params.arena_id}/${router.params.blueprint_id}/commit`,
    method: "POST",
    form: (f) => [f.buttons({router: router})],
    success: () => router.open('..'),
  }),
]);
