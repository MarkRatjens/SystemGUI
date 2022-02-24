app.blueprints.menu = (route) => a({
  class: 'activatable',
  $nodes: [
    app.button({
      label: 'Readme',
      data: {view: 'readme'},
      onclick: (e, el) => route.open(`/blueprints/@${route.params.blueprintIdentifier}`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'License',
      data: {view: 'license'},
      onclick: (e, el) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/license`),
      class: 'btn app-btn',
    }),
    // app.button({
    //   label: 'Bindings',
    //   data: {view: 'bindings'},
    //   onclick: (e, el) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/bindings`),
    //   class: 'btn app-btn',
    // }),
    // app.button({
    //   label: 'Utilization',
    //   data: {view: 'utilization'},
    //   onclick: (e, el) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/utilization`),
    //   class: 'btn app-btn',
    // }),
  ],
  $init: (el) => el.$activate(),
  $update: (el) => (active) => {
    el.$$(`button`).classList.remove('active')
    el.$(`button[data-view="${active}"]`).classList.add('active')
  },
  $activate: (el) => () => {
    let fragment = window.location.pathname.split('/')[3]
    if (el.$(`button[data-view="${fragment}"]`)) {
      el.$update(fragment)
    } else {
      el.$update('readme')
    }
  },
})
