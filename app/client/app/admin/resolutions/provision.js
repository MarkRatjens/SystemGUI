app.admin.resolutions.provision = (router) => (a, x) => a.div([
  a.h3(`Create provisions?`),
  app.form({
    url: `/api/resolutions/${router.params.resolutionIdentifier}/provision`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'resolution_identifier',
        value: router.params.resolutionIdentifier,
      }),
      f.buttons({router: router})
    ],
    success: () => router.open(`/admin/provisioning/${router.params.resolutionIdentifier}`),
  }),
]);
