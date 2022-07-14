app.arenas.resolutions.prebuild.output = (route) => app.stream({
  label: 'Building',
  url: `/api/streaming/packs/@${route.params.arenaIdentifier}::${route.params.blueprintIdentifier}/building?timestamp=${route.params.timestamp}`,
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }))
  }
})
