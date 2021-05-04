app.admin.blueprints.show = (router) => (a, x) => a.div([
  app.fetch({
    url: [
      `/api/blueprints/${router.params.blueprintIdentifier}`,
      `/api/blueprints/${router.params.blueprintIdentifier}/status`,
      `/api/blueprints/${router.params.blueprintIdentifier}/resolutions`,
    ],
    placeholder: app.spinner('Loading blueprint'),
    success: ([blueprint, status, resolutions], el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-edit", "Edit"),
            onclick: () => router.open(`edit`),
          }),
          app.button({
           label: app.icon("fas fa-sync", "Synchronize"),
           onclick: () => router.open("sync"),
         }),
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => router.open(`/admin/blueprints/${router.params.blueprintIdentifier}/delete`),
            class: "btn btn-outline-danger",
          }),
        ],
      }),
      a.hr,
      status.publication.exist ?
      app.float({
        left: [
          app.button({
           label: app.icon("fas fa-drafting-compass", "Create resolution"),
           onclick: () => router.open("resolve"),
         }),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-book", "Publication"),
            onclick: () => router.open(`/admin/publications/${router.params.blueprintIdentifier}`),
          }),
        ],
      }) :
      a.div('No publication'),
      a.br,
      a.div("Resolutions"),
      resolutions.length ?
      resolutions.map(
        (resolution_identifier) => a.div(app.button({
          label: app.icon("fa fa-caret-right", resolution_identifier),
          onclick: () => router.open(`/admin/resolutions/${resolution_identifier}`),
        }))
      ) :
      app.placeholder('None'),
      a.hr,
      x.out(blueprint),
    ],
  }),
]);
