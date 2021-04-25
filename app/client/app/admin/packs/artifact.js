app.admin.packs.artifact = (router) => (a, x) => a.div([
  app.fetch({
    url: `/api/packs/${router.params.resolution_id}/artifact`,
    placeholder: app.spinner('Loading artifact'),
    success: (artifact, el) => [
      a.pre(artifact),
      // app.button({
      //   label: app.icon("fas fa-check", "Done"),
      //   onclick: () => router.open(`..`),
      // }),

    ],
  }),
]);
