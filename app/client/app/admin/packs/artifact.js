app.admin.packs.artifact = (route) => (a, x) => a.div([
  app.fetch({
    url: `/api/packs/${route.params.resolutionIdentifier}/artifact`,
    placeholder: app.spinner('Loading artifact'),
    success: (artifact, el) => [
      a.pre(artifact),
      // app.button({
      //   label: app.icon("fas fa-check", "Done"),
      //   onclick: () => route.open(`..`),
      // }),

    ],
  }),
]);
