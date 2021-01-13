app.admin.index = (router) => (a,x) => [
  app.close(() => router.open('/')),
  a.h1('Admin'),
  app.button({
    label: app.icon('fas fa-map', 'Blueprints'),
    onclick: () => router.open('/admin/blueprints'),
  }),
  app.button({
    label: app.icon('fas fa-drafting-compass', 'Resolutions'),
    onclick: () => router.open('/admin/resolutions'),
  }),
  app.button({
    label: app.icon('fas fa-box-open', 'Packing'),
    onclick: () => router.open('/admin/packing'),
  }),
  app.button({
    label: app.icon('fas fa-clipboard-list', 'Provisioning'),
    onclick: () => router.open('/admin/provisioning'),
  }),
  // app.button({
  //   label: app.icon('fas fa-globe', 'Domains'),
  //   onclick: () => router.open('/admin/domains'),
  // }),
  app.button({
    label: app.icon('fas fa-dot-circle', 'Arenas'),
    onclick: () => router.open('/admin/arenas'),
  }),
]
