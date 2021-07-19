app.admin.blueprints.readme.edit = (route, blueprint) => (a, x) => a.div([
  app.fetch({
    url: `/api/blueprints/${route.params.blueprintIdentifier}/readme`,
    placeholder: app.spinner('Loading blueprint readme'),
    success: (readme, el) => [
      app.form({
        url: `/api/blueprints/${route.params.blueprintIdentifier}/readme`,
        method: "PUT",
        object: {readme: readme},
        form: (f) => [
          f.field({
            key: 'readme',
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
]);
