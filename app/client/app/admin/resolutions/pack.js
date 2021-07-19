app.admin.resolutions.pack = (route) => (a, x) => a.div([
  a.h3(`Create pack?`),
  app.form({
    url: `/api/resolutions/${route.params.resolutionIdentifier}/pack`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'resolution_identifier',
        value: route.params.resolutionIdentifier,
      }),
      f.buttons({route: route})
    ],
    success: () => route.open(`/admin/packs/${route.params.resolutionIdentifier}`),
  }),
]);
