app.dashboard.arenas.deploy = (router) => (a,x) => a.div([
  a.h3(`Deploy ${router.params.arena_id} arena?`),
  app.form({
    url: `/api/arenas/${router.params.arena_id}/deploy`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'resolution_identifier',
        value: router.params.resolution_id,
      }),
      f.buttons({router: router})
    ],
    success: () => router.open(`/arenas${router.params.arena_id}/deploying`),
  }),
]);
