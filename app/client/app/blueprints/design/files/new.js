app.blueprints.design.files.new = (route) => a.div([
  app.jsonForm({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/files`,
    route: route,
    method: 'POST',
    form: f => [
      f.field({
        key: 'filepath',
        label: false,
        required: true,
        placeholder: 'File path',
        pattern: '^(commissioning|packing|service_tasks)\\/[\\-\\w\\.\\/]+$',
        invalid: (value, validity, controlEl) => {
          if (value.match(/^\//)) {
            return "Must not start with a slash."
          } else if (value.match(/^(?!commissioning|packing|service_tasks)/)) {
            return "Must have a first-level directory name of either 'commissioning', 'packing', or 'service_tasks'."
          } else {
            return "Must be a valid filepath."
          }
        },

      }),
    ],
    success: (path) => route.open(`../@${path.replace(/\//g, '::')}`),
  }),
])
