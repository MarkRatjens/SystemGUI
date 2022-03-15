app.arenas.orchestrate.output = (route) => app.stream({
  label: 'Orchestrating',
  url: '/api/streaming/arenas/up',
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }))
  }
})
