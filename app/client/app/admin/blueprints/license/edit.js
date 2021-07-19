app.admin.blueprints.license.edit = (route, blueprint) => (a, x) => a.div([
  app.fetch({
    url: `/api/blueprints/${route.params.blueprintIdentifier}/license`,
    placeholder: app.spinner('Loading blueprint license'),
    success: (license, el) => [
      app.form({
        url: `/api/blueprints/${route.params.blueprintIdentifier}/license`,
        method: "PUT",
        object: {license: license},
        form: (f) => [
          f.field({
            key: 'license',
            as: 'markdown',
          }),
          f.buttons({route: route})
        ],
        success: (result, el) => {
          route.open('..')
        },
      }),
    ],
  }),

  // app.form({
  //   url: `/api/blueprints/${route.params.blueprintIdentifier}/license`,
  //   method: "PUT",
  //   object: blueprint,
  //   form: (f) => [
  //     f.field({
  //       key: 'license',
  //       as: 'markdown',
  //     }),
  //     f.buttons({route: route})
  //   ],
  //   success: (result, el) => {
  //     route.open('..')
  //   },
  // }),
]);
