app.blueprints.import.output = (route) => app.stream({
  label: 'Importing',
  url: `/api/streaming/publications/@${route.params.identifier}/importing?timestamp=${route.params.timestamp}`,
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open(`../@${route.params.identifier}`),
      class: 'btn btn-primary',
    }))
  }
})
