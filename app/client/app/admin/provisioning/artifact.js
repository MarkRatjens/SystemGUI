app.admin.provisioning.artifact = (route) => (a, x) => a.div([
  app.fetch({
    url: `/api/provisioning/${route.params.resolutionIdentifier}/artifact`,
    placeholder: app.spinner('Loading artifact'),
    success: (payload, el) => [
      a.pre(payload),
      // app.button({
      //   label: app.icon("fas fa-check", "Done"),
      //   onclick: () => route.open(`..`),
      // }),
    ],
  }),
]);
