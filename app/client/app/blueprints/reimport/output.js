app.blueprints.reimport.output = (route) => app.stream({
  label: 'Reimporting',
  url: `/api/streaming/publications/@${route.params.blueprintIdentifier}/importing?timestamp=${route.params.timestamp}`,
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }))
  }
})
