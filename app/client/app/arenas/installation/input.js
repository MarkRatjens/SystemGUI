app.arenas.installation.input = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
    ],
    success: ([installation, form]) =>
    app.jsonForm({
      route: route,
      url: `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      form: f => Object.keys(installation.input || {}).map(key => f.field({
        key: key,
        label: key,
        value: installation.input[key],
      })),
      digest: form => {
        installation.input = form
        return {model: installation}
      }
    }),
  }),

]
