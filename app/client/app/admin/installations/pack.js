app.admin.installations.pack = (route) => (a, x) => a.div([
  a.h3(`Create pack?`),
  app.form({
    url: `/api/installations/${route.params.installationIdentifier}/pack`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'installation_identifier',
        value: route.params.installationIdentifier,
      }),
      f.buttons({route: route})
    ],
    success: () => route.open(`/admin/packs/${route.params.installationIdentifier}`),
  }),
]);
