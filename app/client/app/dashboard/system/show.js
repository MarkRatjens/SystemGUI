app.dashboard.system.show = (router) => (a,x) => a.div([
  "You're looking at the dashboard. This is a work in progress.",
  "The Admin views are a bit more developed: ",
  app.button({
    label: app.icon('fas fa-wrench', 'Admin'),
    onclick: () => router.open('/admin'),
    class: 'btn btn-sm btn-primary',
  }),
  a.hr,
  'TODO: Build this view as a system page (or some other start page).',
  app.dashboard.system.charts(router)
])
