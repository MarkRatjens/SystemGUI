app.settings.keys.new = (route, blueprint) => (a, x) => a.div([
  a.h5('New'),
  app.jsonForm({
    url: `/api/keys`,
    method: "POST",
    scope: 'model',
    route: route,
    horizontal: true,
    form: (f) => [
      f.field({
        key: 'identifier_type',
        label: 'Identifier',
        as: 'radios',
        value: 'default',
        selections: {
          default: 'Default <username>@<host>',
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
        key: 'explanation',
        placeholder: 'What is this key for?',
      }),
      f.field({
        key: 'host',
        placeholder: 'Which domain has issued the token?',
        required: true,
      }),
      f.field({
        key: 'username',
        placeholder: 'Which user is the token for?',
        required: true,
      }),
      f.field({
        key: 'token',
        as: 'textarea',
        control: {
          textareaTag: {
            class: 'form-control text-monospace',
          },
        },
        required: true,
      }),
    ],
    digest: (form) => {
      delete form.model.identifier_type
      return app.compact(form)
    },
    success: (identifier) => route.open(`../@${identifier}`),
  }),
]);
