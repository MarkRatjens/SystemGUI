app.admin.installations.provision = (route) => (a, x) => a.div([
  a.h3(`Create provisions?`),
  app.form({
    url: `/api/installations/${route.params.installationIdentifier}/provision`,
    form: (f) => [
      f.field({
        as: 'hidden',
        key: 'installation_identifier',
        value: route.params.installationIdentifier,
      }),
      f.buttons({route: route})
    ],
    success: () => route.open(`/admin/provisioning/${route.params.installationIdentifier}`),
  }),
]);
