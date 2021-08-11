app.blueprints.menu = (route) => (a,x) => a({
  class: 'activatable',
  $nodes: [
    app.button({
      label: 'Readme',
      data: {view: 'readme'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'License',
      data: {view: 'license'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/license`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'Bindings',
      data: {view: 'bindings'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/bindings`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'Relations',
      data: {view: 'relations'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/relations`),
      class: 'btn app-btn',
    }),
  ],
  $init: (el) => el.$activate(),
  $update: (el, active) => {
    el.$$(`button`).classList.remove('active')
    if (!el.$(`button[data-view="${active}"]`)) {debugger}
    el.$(`button[data-view="${active}"]`).classList.add('active')
  },
  $activate: (el) => () => {
    let fragment = window.location.pathname.split('/')[3]
    if (el.$(`button[data-view="${fragment}"]`)) {
      el.$state = fragment
    } else {
      el.$state = 'readme'
    }
  },
})
