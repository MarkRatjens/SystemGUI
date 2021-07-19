app.admin.publications.show = (route) => (a,x) => a.div([
  app.fetch({
    url: [
      `/api/publications/${route.params.publication_id}`,
      `/api/publications/${route.params.publication_id}/status`,
    ],
    placeholder: app.spinner('Loading publication'),
    success: ([publication, status], el) => [
      app.float({
        left: [
          app.button({
            label: app.icon("fas fa-upload", "Export"),
            onclick: () => route.open("export"),
          }),
          status.blueprint.exist ?
          app.button({
            label: app.icon("fas fa-sync", "Synchronize"),
            onclick: () => route.open("sync"),
          }) :
          null
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => route.open("delete"),
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
            onclick: () => route.open(`/admin/publications/${route.params.publication_id}/blueprint`),
          }),
        ],
        right: [
          status.blueprint.exist ? app.button({
            label: app.icon("fas fa-server", "Blueprint"),
            onclick: () => route.open(`/admin/blueprints/${route.params.publication_id}`),
          }) : null,
        ]
      }),
      a.hr,
      x.out(publication),
    ],
  }),

])
