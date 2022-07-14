app.arenas.prebuild.output = (route) => app.stream({
  label: 'Building',
  url: `/api/streaming/arenas/@${route.params.arenaIdentifier}/building?timestamp=${route.params.timestamp}`,
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }))
  }
})
