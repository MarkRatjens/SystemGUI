app.blueprints.reimport.output = (route) => app.stream({
  label: 'Reimporting',
  url: `/api/streaming/publications/import`,
  complete: (el) => {
    el.append(app.button({
      label: app.icon('fas fa-check', 'Done'),
      onclick: () => route.open('..'),
      class: 'btn btn-primary',
    }))
  }
})
