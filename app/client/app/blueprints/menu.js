app.blueprints.menu = (route) => a({
  class: 'activatable',
  $nodes: [
    app.button({
      label: 'Readme',
      data: {view: 'readme'},
      onclick: (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'License',
      data: {view: 'license'},
      onclick: (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/license`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'Relations',
      data: {view: 'relations'},
      onclick: (e) => route.open(`/blueprints/@${route.params.blueprintIdentifier}/relations`),
      class: 'btn app-btn',
    }),
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
