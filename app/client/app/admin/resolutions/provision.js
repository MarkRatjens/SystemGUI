app.admin.resolutions.provision = (route) => (a, x) => a.div([
  a.h3(`Create provisions?`),
  app.form({
    url: `/api/resolutions/${route.params.resolutionIdentifier}/provision`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'resolution_identifier',
        value: route.params.resolutionIdentifier,
      }),
      f.buttons({route: route})
    ],
    success: () => route.open(`/admin/provisioning/${route.params.resolutionIdentifier}`),
  }),
]);
