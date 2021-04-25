app.admin.arenas.show = (router) => (a,x) => a.div([
  app.fetch({
    url: [
      `/api/arenas/${router.params.arena_id}`,
      `/api/arenas/${router.params.arena_id}/resolutions`,
    ],
    placeholder: app.spinner('Loading arena'),
    success: ([arena, resolutions], el) => el.$nodes = [
      app.float({
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
          app.button({
            label: app.icon('fas fa-shoe-prints', 'Bootstrap'),
            onclick: () => router.open("bootstrap"),
          }),
          app.button({
            label: app.icon('fas fa-compass', 'Resolve'),
            onclick: () => router.open("resolve"),
          }),
        ],
      }),
      a.hr,
      app.button({
        label: app.icon('far fa-flag', 'Init'),
        onclick: () => router.open("init"),
        class: 'btn btn-light',
      }),
      ' ',
      app.button({
        label: app.icon('fas fa-flag', 'Plan'),
        onclick: () => router.open("plan"),
        class: 'btn btn-warning',
      }),
      ' ',
      app.button({
        label: app.icon('fas fa-flag-checkered', 'Apply'),
        onclick: () => router.open("apply"),
        class: 'btn btn-primary',
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
