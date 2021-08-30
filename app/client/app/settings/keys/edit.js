app.settings.keys.edit = (route) => (a, x) => a.div([
  app.fetch({
    url: `/api/settings/keys/@${route.params.keyIdentifier}`,
    success: token => [
      app.jsonForm({
        url: `/api/settings/keys/@${route.params.keyIdentifier}`,
        method: "PUT",
        object: token,
        route: route,
        scope: 'model',
        horizontal: true,
        form: (f) => [
          f.field({
            key: 'identifier_type',
            label: 'Identifier',
            as: 'radios',
            value: (f.object.identifier == `${f.object.userme}@${f.object.host}`) ? 'default' : 'custom',
            selections: {
              default: 'Default <userme>@<host>',
              custom: 'Custom'
            }
          }),
          f.field({
            key: 'identifier',
            label: false,
            placeholder: 'Enter custom identifier',
            dependent: {
              key: 'identifier_type',
              value: 'custom',
            },
            required: true,
          }),
          f.field({
            key: 'host',
            required: true,
          }),
          f.field({
            key: 'userme',
            required: true,
          }),
          f.field({
            key: 'explanation',
          }),
        ],
        digest: (form) => {
          delete form.model.identifier_type
          return app.compact(form)
        },
        success: (identifier) => route.open(`../../@${identifier}`),
      }),
    ]
  }),
]);