app.arenas.resolutions.prebuild.output = (route) => app.stream({
  label: {stream: 'Building', action: 'Build', tool: 'Docker'},
  url: `/api/streaming/${route.params.arenaIdentifier}/${route.params.blueprintIdentifier}/build`,
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }))
  }
})
