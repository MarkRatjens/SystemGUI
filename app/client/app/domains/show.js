app.domains.show = (route) => a['app-domains-show']([
  app.fetch({
    url: `/api/domains/@${route.params.domainIdentifier}`,
    placeholder: app.spinner('Loading domain'),
    success: (domain) => domain.primary
    ? app.icon('fas fa-star', 'Primary domain')
    : ''
  }),
  a.br,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-edit', 'Edit'),
        onclick: (e, el) => route.open('edit'),
      }),
    ]
  }),
  a.hr,
  app.float({
    right: [
      app.button({
        label: app.icon('fa fa-trash'),
        title: 'Delete domain',
        class: 'btn btn-outline-danger',
        onclick: () => route.open('delete'),
      }),
    ]
  }),
])
