app.blueprints.design.publish = (route, blueprint) => (a, x) => a.div([
  a.h3(`Publish blueprint`),
  a.p('Where would you like to publish?'),
  app.form({
    url: `/api/blueprints/@${route.params.blueprintIdentifier}/publication`,
    method: "POST",
    scope: 'publication',
    form: (f) => [
      f.field({
        key: 'url',
        label: false,
        placeholder: 'Git repo URL',
        type: 'url',
        required: true,
      }),
      f.field({
        key: 'branch',
        label: false,
        placeholder: 'Optional branch',
      }),
      f.buttons({route: route}),
    ],
    success: () => route.open('..'),
  }),
]);
