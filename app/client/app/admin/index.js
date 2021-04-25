app.admin.index = (router) => (a,x) => a.div([
//   app.closeOld(() => router.open('/')),
  app.close(router),
  a.h1('Admin'),
  a.p(app.button({
    label: app.icon('fas fa-dot-circle', 'Arenas'),
    onclick: () => router.open('/admin/arenas'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-book', 'Publications'),
    onclick: () => router.open('/admin/publications'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-map', 'Blueprints'),
    onclick: () => router.open('/admin/blueprints'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-drafting-compass', 'Resolutions'),
    onclick: () => router.open('/admin/resolutions'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-box-open', 'Packs'),
    onclick: () => router.open('/admin/packs'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-clipboard-list', 'Provisioning'),
    onclick: () => router.open('/admin/provisioning'),
  })),
  // a.p(app.button({
  //   label: app.icon('fas fa-globe', 'Domains'),
  //   onclick: () => router.open('/admin/domains'),
  // })),
])
