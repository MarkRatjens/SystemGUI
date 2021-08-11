app.blueprints.design.menu = (route) => (a,x) => a({
  class: 'activatable',
  $nodes: [
    app.button({
      label: 'Blueprint',
      data: {view: 'blueprint'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'Icon',
      data: {view: 'icon'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/icon`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'Readme',
      data: {view: 'readme'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/readme`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'License',
      data: {view: 'license'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/license`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'Form',
      data: {view: 'form'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/form`),
      class: 'btn app-btn',
    }),
    app.button({
      label: 'Files',
      data: {view: 'files'},
      onclick: () => route.open(`/blueprints/@${route.params.blueprintIdentifier}/design/files`),
      class: 'btn app-btn',
    }),
  ],
  $init: (el) => el.$activate(),
  $update: (el, active) => {
    el.$$(`button`).classList.remove('active')
    el.$(`button[data-view="${active}"]`).classList.add('active')
  },
  $activate: (el) => () => {
    let fragment = window.location.pathname.split('/')[4]
    if (el.$(`button[data-view="${fragment}"]`)) {
      el.$state = fragment
    } else {
      el.$state = 'blueprint'
    }
  },
})
