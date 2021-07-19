app.admin.arenas.show = (route) => (a,x) => a.div([
  app.fetch({
    url: `/api/arena/${route.params.arenaIdentifier}`,
    placeholder: app.spinner('Loading arena'),
    success: (arena, el) => el.$nodes = [
      app.float({
        left: [
          app.button({
            label: app.icon('fas fa-project-diagram', 'Bind'),
            onclick: () => route.open("bind"),
          }),
          app.button({
            label: app.icon('fas fa-tasks', 'Installer'),
            onclick: () => route.open("installer"),
          }),
          app.button({
            label: app.icon('fas fa-pencil-ruler', 'Resolver'),
            onclick: () => route.open("resolver"),
          }),
          app.button({
            label: app.icon("fas fa-running", "Apply"),
            onclick: () => route.open(`/admin/arenas/${route.params.arenaIdentifier}/apply`),
          }),
        ],
        right: [
          app.button({
            label: app.icon("fa fa-trash", "Delete"),
            onclick: () => route.open("delete"),
            class: "btn btn-outline-danger",
          }),
        ]
      }),
      // a.hr,
      // a.div("Resolutions"),
      // resolutions.map(
      //   (resolution_identifier) => a.div(app.button({
      //     label: app.icon("fa fa-caret-right", resolution_identifier),
      //     onclick: () => route.open(`/admin/resolutions/${resolution_identifier}`),
      //   }))
      // ),
      // a.hr,
      // a.div("Installations"),
      // installations.map(
      //   (installation_identifier) => a.div(app.button({
      //     label: app.icon("fa fa-caret-right", installation_identifier),
      //     onclick: () => route.open(`/admin/installations/${installation_identifier}`),
      //   }))
      // ),
      // a.hr,
      x.out(arena),
    ]
  }),
])
