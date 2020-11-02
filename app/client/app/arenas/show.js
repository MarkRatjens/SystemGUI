app.arenas.show = (router) => (a,x) => [
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
