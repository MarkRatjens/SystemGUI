app.admin.blueprints.show = (router) => (a, x) => a.div([
  app.fetch({
    url: [
      `/api/blueprints/${router.params.blueprint_id}`,
      `/api/blueprints/${router.params.blueprint_id}/status`,
      `/api/blueprints/${router.params.blueprint_id}/resolutions`,
    ],
    placeholder: app.spinner('Loading blueprint'),
    success: ([blueprint, status, resolutions], el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-edit", "Edit"),
            onclick: () => router.open(`edit`),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => router.open(`/admin/blueprints/${router.params.blueprint_id}/delete`),
            class: "btn btn-outline-danger",
          }),
        ],
      }),
      a.hr,
      status.publication.exist ?
      app.float({
        left: [
           app.button({
            label: app.icon("fas fa-sync", "Synchronize"),
            onclick: () => router.open("sync"),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fas fa-book", "Publication"),
            onclick: () => router.open(`/admin/publications/${router.params.blueprint_id}`),
          }),
        ],
      }) :
      a.div('No publication'),
      a.hr,
      a.div("Resolutions"),
      resolutions.map(
        (resolution_identifier) => a.div(app.button({
          label: app.icon("fa fa-caret-right", resolution_identifier),
          onclick: () => router.open(`/admin/resolutions/${resolution_identifier}`),
        }))
      ),
      a.hr,
      x.out(blueprint),
    ],
  }),
]);
