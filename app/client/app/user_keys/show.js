app.user_keys.show = (route) => (a, x) => a.div([
  app.button({
    label: app.icon('fas fa-edit', 'Edit'),
    title: 'Edit token information',
    onclick: (el) => () => route.open('edit'),
  }),
  ' ',
  app.button({
    label: app.icon('fas fa-user-secret', 'Token'),
    title: 'Replace token',
    onclick: (el) => () => route.open('token'),
  }),
  a.hr,
  app.float({
    left: [
      app.button({
        label: app.icon('fa fa-check', 'Done'),
        title: 'Open tokens',
        class: 'btn btn-primary',
        onclick: (el) => () => route.open('..'),
      }),
    ],
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete tokens',
        class: 'btn btn-outline-danger',
        onclick: (el) => () => route.open('delete'),
      }),
    ],
  }),
]);
