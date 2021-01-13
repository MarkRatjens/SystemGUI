app.dashboard.blueprints.domain.edit = (router, resolution) => (a, x) => [

  app.admin.resolutions.form({
    router: router,
    object: resolution.domain,
    form: (f) => f.field({
      key: 'identifier',
      label: false,
    }),
    update: (form) => {
      resolution.domain.identifier = form.identifier
      return resolution;
    },
    buttonless: true,
  }),

];
