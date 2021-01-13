app.admin.arenas.show = (router) => (a,x) => [
  app.http({
    url: `/api/arenas/${router.params.arena_id}`,
    placeholder: app.spinner('Loading arena'),
    success: (arena, el) => el.$nodes = [
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
        class: 'btn btn-danger',
      }),
      a.hr,
      x.out(arena),
      a.hr,
      app.http({
        url: `/api/arenas/${router.params.arena_id}/provisioning`,
        placeholder: app.spinner('Loading arena provisions'),
        success: (provisioning, el) => {
          el.$nodes = [
            a.div('Provisions'),
            a.ul(provisioning.map((provisions) => a.li(provisions.resolution_identifier)))
          ]
        }
      }),
    ]
  }),
  a.hr,
  app.float({
    right: [
      app.button({
        label: app.icon("fa fa-trash", "Delete"),
        onclick: () => router.open("delete"),
        class: "btn btn-outline-danger",
      }),
    ]
  }),
]
