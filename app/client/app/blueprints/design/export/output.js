app.blueprints.design.export.output = (route) => app.stream({
  label: 'Exporting',
  url: `/api/streaming/publications/@${route.params.blueprintIdentifier}/exporting?timestamp=${route.params.timestamp}`,
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open(`..`),
      class: 'btn btn-primary',
    }))
  }
})
