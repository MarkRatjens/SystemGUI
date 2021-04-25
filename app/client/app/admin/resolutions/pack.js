app.admin.resolutions.pack = (router) => (a, x) => a.div([
  a.h3(`Create pack?`),
  app.form({
    url: `/api/packs`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'resolution_identifier',
        value: router.params.resolution_id,
      }),
      f.buttons({router: router})
    ],
    success: () => router.open(`/admin/packs/${router.params.resolution_id}`),
  }),
]);
