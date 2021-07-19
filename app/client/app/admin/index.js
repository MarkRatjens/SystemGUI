app.admin.index = (route) => (a,x) => a.div([
//   app.closeOld(() => route.open('/')),
  app.close(route),
  a.h1('Admin'),
  a.p(app.button({
    label: app.icon('fas fa-dot-circle', 'Arenas'),
    onclick: () => route.open('/admin/arenas'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-book', 'Publications'),
    onclick: () => route.open('/admin/publications'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-map', 'Blueprints'),
    onclick: () => route.open('/admin/blueprints'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-tasks', 'Installations'),
    onclick: () => route.open('/admin/installations'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-pencil-ruler', 'Resolutions'),
    onclick: () => route.open('/admin/resolutions'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-box-open', 'Packs'),
    onclick: () => route.open('/admin/packs'),
  })),
  a.p(app.button({
    label: app.icon('fas fa-clipboard-list', 'Provisioning'),
    onclick: () => route.open('/admin/provisioning'),
  })),
  // a.p(app.button({
  //   label: app.icon('fas fa-globe', 'Domains'),
  //   onclick: () => route.open('/admin/domains'),
  // })),
])
