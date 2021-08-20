app.arenas.installation.configuration = (route) => (a,x) => [
  app.fetch({
    url: [
      `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      `/api/blueprints/@${route.params.blueprintIdentifier}/form`,
    ],
    success: ([installation, form]) =>
    ax.is.array(form.components) && form.components.length ?
    app.formDSL.builder.form({
      components: form.components,
    }, installation.input, {
      action: `/api/installations/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}`,
      // scope: 'model',
      route: route,
      digest: (form) => {
        installation.input = app.compact(form)
        return {model: installation}
      }
    }) :
    [
      a.p(app.placeholder('Nothing to configure.')),
      app.button({
        label: app.icon('fas fa-check', 'Done'),
        onclick: () => route.open('..'),
        class: 'btn btn-primary',
      }),
    ],
  }),

]