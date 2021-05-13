app.admin.arenas.show = (router) => (a,x) => a.div([
  app.fetch({
    url: [
      `/api/arenas/${router.params.arenaIdentifier}`,
      `/api/arenas/${router.params.arenaIdentifier}/resolutions`,
    ],
    placeholder: app.spinner('Loading arena'),
    success: ([arena, resolutions], el) => el.$nodes = [
      app.float({
        left: [
          app.button({
            label: app.icon('fas fa-project-diagram', 'Bind'),
            onclick: () => router.open("bind"),
          }),
          app.button({
            label: app.icon('fas fa-drafting-compass', 'Resolve'),
            onclick: () => router.open("resolve"),
          }),
          app.button({
            label: app.icon("fas fa-running", "Apply"),
            onclick: () => router.open(`/admin/arenas/${router.params.arenaIdentifier}/apply`),
          }),
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
      a.div("Resolutions"),
      resolutions.map(
        (resolution_identifier) => a.div(app.button({
          label: app.icon("fa fa-caret-right", resolution_identifier),
          onclick: () => router.open(`/admin/resolutions/${resolution_identifier}`),
        }))
      ),
      a.hr,
      x.out(arena),
    ]
  }),
])
