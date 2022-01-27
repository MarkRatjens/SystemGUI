app.arenas.instructions.show = (route) => (a,x) => a['app-arenas-instruct-show']([
  a['div.btn-group']([
    'init',
    'plan',
    'show',
    'apply',
  ].map((instruction) => app.jsonForm({
    url: `/api/arenas/@${route.params.arenaIdentifier}/terraform/${instruction}`,
    method: "POST",
    buttonless: true,
    form: (f) => [
      app.button({
        label: instruction,
        type: 'submit',
      }),
    ],
    success: () => route.load(instruction),
  }))),
  a.br,
  a.br,
  app.button({
    label: app.icon('fas fa-check', 'Done'),
    onclick: () => route.open('..'),
    class: 'btn btn-primary',
  }),

])
