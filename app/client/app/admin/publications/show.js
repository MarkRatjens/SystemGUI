app.admin.publications.show = (router) => (a,x) => a.div([
  app.fetch({
    url: [
      `/api/publications/${router.params.publication_id}`,
      `/api/publications/${router.params.publication_id}/status`,
    ],
    placeholder: app.spinner('Loading publication'),
    success: ([publication, status], el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-upload", "Export"),
            onclick: () => router.open("export"),
          }),
          status.blueprint.exist ?
          app.button({
            label: app.icon("fas fa-sync", "Synchronize"),
            onclick: () => router.open("sync"),
          }) :
          null
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => router.open("delete"),
            class: "btn btn-outline-danger",
          }),
        ]
      }),
      a.hr,
      app.float({
        left: [
          status.blueprint.exist ?
          null :
          app.button({
            label: app.icon("fas fa-server", "Create blueprint"),
            onclick: () => router.open(`/admin/publications/${router.params.publication_id}/blueprint`),
          }),
        ],
        right: [
          status.blueprint.exist ? app.button({
            label: app.icon("fas fa-server", "Blueprint"),
            onclick: () => router.open(`/admin/blueprints/${router.params.publication_id}`),
          }) : null,
        ]
      }),
      a.hr,
      x.out(publication),
    ],
  }),

])
