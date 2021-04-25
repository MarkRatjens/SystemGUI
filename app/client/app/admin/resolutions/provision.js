app.admin.resolutions.provision = (router) => (a, x) => a.div([
  a.h3(`Create provisions?`),
  app.form({
    url: `/api/provisioning`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'resolution_identifier',
        value: router.params.resolution_id,
      }),
      f.buttons({router: router})
    ],
    success: () => router.open(`/admin/provisioning/${router.params.resolution_id}`),
  }),
]);
